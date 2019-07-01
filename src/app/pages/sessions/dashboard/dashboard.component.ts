import {Component, OnDestroy} from '@angular/core';
import { DeleteDialogComponent } from '../../confirm-dialogs/delete-dialog.component';

import { TableHotjoinEditorComponent } from './table-hotjoin-editor.component';
import { TableUrlsEditorComponent } from './table-urls-editor.component';
import { TableLinkSessionComponent } from '../../extra-table-components/table-link-session.component'; 

import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  nOwned :number = 0; 
  nInvited:number = 0; 
  nRead:number = 0; 

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
      name: {
        title: 'Session Name',
        type: 'custom',
        class: 'centered',
        renderComponent: TableLinkSessionComponent
      },
      ownedBy: {
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

  constructor(private dialogService: NbDialogService, private dahsboardService: DashboardService) {
    //this.source.load(this.data);
  }

  ngOnInit(){

    this.dahsboardService.getSessions().subscribe(
      (res: any) => {
        this.source.load(res["data"]["owned"]);
        this.nInvited = res["data"]["nInvited"];
        this.nOwned = res["data"]["nOwned"];
      }, 
      (err: any) => {console.log(err); this.source.load([])}
    );

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
