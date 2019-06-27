import {Component, OnDestroy} from '@angular/core';
import { DeleteDialogComponent } from '../../confirm-dialogs/delete-dialog.component';

import { TableHotjoinEditorComponent } from './table-hotjoin-editor.component';
import { TableUrlsEditorComponent } from './table-urls-editor.component';
import { TableLinkSessionComponent } from '../../extra-table-components/table-link-session.component'; 

import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  nOwned :number = 0; 
  nInvited:number = 10; 
  nRead:number = 0; 

  data :any = [
    {"sessionname": "group1", "sessionHash": "ababab", "owner": "r.jesus417@gmail.com", "allowHotJoin": true, "urls": ["asdsad", "asdsad"]},
    {"sessionname": "group1", "sessionHash": "ababab", "owner": "r.jesus417@gmail.com", "allowHotJoin": true, "urls": ["asdsad", "asdsad"]},
    {"sessionname": "group1", "sessionHash": "ababab", "owner": "r.jesus417@gmail.com", "allowHotJoin": false, "urls": ["asdsad", "asdsad"]},
  ]; 

  buttonUrls: any = ["aaa","aaa","aaa"]; 

  settings = {
    actions:{
      add: false,
      edit: false,
      position: 'right',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      sessionname: {
        title: 'Session Name',
        type: 'custom',
        class: 'centered',
        renderComponent: TableLinkSessionComponent
      },
      owner: {
        title: 'Session Creator',
        type: 'string',
        class: 'centered'
      },
      allowHotJoin: {
        title: 'Has HotJoin', 
        class: 'centered',
        width: '15%',
        type: 'custom',
        renderComponent: TableHotjoinEditorComponent,
      }, 
      urls:{
        title: 'Links', 
        type: 'custom', 
        width: '15%',
        filter: false,
        sort: false,
        renderComponent: TableUrlsEditorComponent
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
        name: "session " + event.data.sessionname, 
        event: event
        },
    });
  }

  ngOnDestroy() {
  }
}
