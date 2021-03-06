import { Directive, Output, EventEmitter, OnDestroy, ElementRef, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appThead]'
})
export class TheadDirective implements OnInit, OnDestroy {
  ths: HTMLElement[];
  @Output() orderChanged: EventEmitter<string> = new EventEmitter<string>();

  private thsSubscriptions: Subscription[] = [];

  constructor(private elRef: ElementRef) {
    this.ths = this.elRef.nativeElement.getElementsByTagName('wc-th');
  }

  ngOnInit() {
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
