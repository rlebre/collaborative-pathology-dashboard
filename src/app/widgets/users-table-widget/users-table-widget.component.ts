import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TablePermsEditorComponent } from './table-perms-editor.component';
import { TablePermsViewComponent } from './table-perms-view.component';
import { TableRoleViewComponent } from './table-role-view.component';
import { TableRoleEditorComponent } from './table-role-editor.component';
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
  @Input() isOwner: boolean;
  @Input() new_members: InvUser[];

  source: LocalDataSource = new LocalDataSource();
  deletedItems: any[] = [];
  showSaveButton: boolean = false;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
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
      role: {
        title: 'Role', 
        class: 'centered',
        type: 'custom', 
        width: '15%',
        renderComponent: TableRoleViewComponent,
        editor: {
          type: 'custom',
          component: TableRoleEditorComponent,
        },
      },
    },
  };

  constructor() {
 
  }

  ngOnInit() {

    //If this user does not have permissions, we remove the editing buttons
    if(!this.isOwner){
      this.settings.actions['edit']=false;
      this.settings.actions['add']=false;
      this.settings.actions['delete']=false;
    }
    if(!this.new_members)
      this.new_members = [];
    this.source.load(this.members);
  }

  undo(){
    let elem = this.deletedItems.pop();
    this.source.append(elem);
  }
  
  onDelete(event){
    //verify if its in the new members, only if there are any
    if(this.new_members.length > 0){
      for(var i = this.new_members.length -1 ; i>=0; i--){
        if(this.new_members[i]['email'] == event.data.email){
          this.new_members.splice(i,1);
          break;
        }
      }
    }
    
    this.deletedItems.push(event.data);

    //For some reason this.members is not updated, so we have to do it manually
    const index = event.source.data.indexOf(event.data);
    event.source.data.splice(index,1);
    event.confirm.resolve();
  }

  onCreate(event){
    this.new_members.push(event.newData);
    event.confirm.resolve(event.newData);
  }

  ngOnDestroy() {

  }


}
