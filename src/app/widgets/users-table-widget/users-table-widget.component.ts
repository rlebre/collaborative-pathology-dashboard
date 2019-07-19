import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TablePermsEditorComponent } from './table-perms-editor.component';
import { TablePermsViewComponent } from './table-perms-view.component';
import { TableUsersViewComponent } from './table-users-view.component';
import { TableUsersEditorViewComponent } from './table-users-editor-view.component';

import { InvUser } from '../../data-models/InvUser';


@Component({
  selector: 'ngx-users-table-widget',
  styleUrls: ['./users-table-widget.component.scss'],
  templateUrl: './users-table-widget.component.html',
})
export class UsersTableWidgetComponent implements OnInit, OnDestroy {

  @Input() members: InvUser[];

  source: LocalDataSource = new LocalDataSource();
  deletedItems: any[] = [];
  showSaveButton: boolean = false;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions:{
      position: 'right',
    },
    columns: {
      details:{
        title: 'Details',
        type: 'custom',
        renderComponent: TableUsersViewComponent,
        editor:{
          type: 'custom',
          component: TableUsersEditorViewComponent,
        }
      },
      email: {
        title: 'Email',
        type: 'string',
        editable: false,
        class: 'centered'
      },
      permissions: {
        title: 'Permissions', 
        class: 'centered',
        type: 'custom', 
        renderComponent: TablePermsViewComponent,
        editor: {
          type: 'custom',
          component: TablePermsEditorComponent,
        },
      },
    },
  };

  constructor() {
 
  }

  ngOnInit() {
    console.log(this.members);
    this.source.load(this.members);
  }

  undo(){
    let elem = this.deletedItems.pop();
    this.source.append(elem);
  }
  
  onDelete(event){
    this.deletedItems.push(event.data);
    this.source.remove(event.data);
  }

  ngOnDestroy() {

  }


}
