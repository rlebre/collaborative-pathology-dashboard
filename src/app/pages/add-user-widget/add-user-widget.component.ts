import {Component, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-add-user-widget',
  styleUrls: ['./add-user-widget.component.scss'],
  templateUrl: './add-user-widget.component.html',
})
export class AddUserWidgetComponent implements OnDestroy {

  @Output() add = new EventEmitter<any>();

  usersToAdd: number; 
  viewOnlyAdd: boolean; 

  constructor() { 
    this.viewOnlyAdd = false;
    this.usersToAdd = 1;
  }

  addUsers() {
    this.add.next({usersToAdd: this.usersToAdd, viewOnlyAdd: this.viewOnlyAdd});
  }

  ngOnDestroy() {
  }
}
