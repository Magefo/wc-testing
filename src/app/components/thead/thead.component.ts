import { Component, OnDestroy, Output, EventEmitter, ElementRef, AfterViewInit} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-thead',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.scss']
})
export class TheadComponent implements AfterViewInit, OnDestroy {
  ths: HTMLElement[];
  @Output() orderChanged: EventEmitter<string> = new EventEmitter<string>();

  private thsSubscriptions: Subscription[] = [];

  constructor(private elRef: ElementRef) {
    this.ths = this.elRef.nativeElement.getElementsByTagName('wc-th');
  }

  ngAfterViewInit(): void {
    for (const th of this.ths) {
      this.thsSubscriptions.push(
        fromEvent(th, 'orderChanged')
          .subscribe((event: CustomEvent) => this.changeOrder(event.detail))
      );
    }
  }

  ngOnDestroy() {
    this.thsSubscriptions.forEach(t => t.unsubscribe());
  }

  private changeOrder(id: string) {
    this.orderChanged.emit(id);
  }
}
