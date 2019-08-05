import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    { id: 1, firstName: 'Miguel', lastName: 'Guerrero', age: '28', job: 'Developer', gender: 'M' },
    { id: 2, firstName: 'Margarita', lastName: 'Forigua', age: '59', job: 'Mom', gender: 'F' },
  ];

  changeOrder(event) {
    console.log(event);
  }
}
