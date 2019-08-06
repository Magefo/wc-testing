import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public persons = [
    {
      id: 1,
      name: 'Miguel',
      lastName: 'Guerrero',
      job: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      actions: ['read']
    },
    {
      id: 2,
      name: 'Damian',
      lastName: 'Assennato',
      job: 'Architect',
      description:
      'consectetur adipiscing elit',
      actions: ['write', 'edit']
    },
    { id: 3,
      name: 'Francisco',
      lastName: 'Rader',
      job: 'Developer',
      description: 'consectetur adipiscing elit',
      actions: ['edit']
    },
    {
      id: 4,
      name: 'Rammel',
      lastName: 'Maestre',
      job: 'Architect',
      description: 'Orci varius natoque penatibus et',
      actions: ['write', 'delete']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeOrder(event) {
    console.log(event);
  }
}
