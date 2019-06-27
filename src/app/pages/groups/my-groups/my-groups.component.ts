import {Component, OnDestroy} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DeleteDialogComponent } from '../../confirm-dialogs/delete-dialog.component';
import { TableGroupsEditorComponent } from './table-groups-editor.component';
import { TableLinkComponent } from '../../extra-table-components/table-link.component'; 

import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-my-groups',
  styleUrls: ['./my-groups.component.scss'],
  templateUrl: './my-groups.component.html',
})
export class MyGroupsComponent implements OnDestroy {

  event :any; 

  data :any = [
    {"groupname": "group1", "users": [{"email": "email@ua.pt"}, {"email": "email2@ua.pt"}]},
    {"groupname": "group2", "users": [{"email": "email2@ua.pt"}, {"email": "email2@ua.pt"}]},
    {"groupname": "group3", "users": [{"email": "emai3@ua.pt"}, {"email": "email2@ua.pt"}]}
  
  ]; 
  settings = {
    actions:{
      add: false,
      edit: false,
      position: 'right' 
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      groupname: {
        title: 'Group Name',
        type: 'custom',
        renderComponent: TableLinkComponent
      },
      users: {
        title: 'Group Members',
        filter: false,
        sort: false,
        type: 'custom',
        renderComponent: TableGroupsEditorComponent
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private dialogService: NbDialogService) {
    this.source.load(this.data);
  }

  onDeleteConfirm(event) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        title: 'Confirm',
        type: 0,
        name: "group " + event.data.groupname, 
        event: event
      },
    });
  }

  ngOnDestroy() {
    console.log("destroyed"); 
  }
}
