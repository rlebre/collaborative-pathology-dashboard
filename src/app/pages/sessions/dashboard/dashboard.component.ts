import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { NbDialogService } from '@nebular/theme';

import { DeleteDialogComponent } from '../confirm-dialogs/delete-dialog.component';

import { TableHotjoinEditorComponent } from './table-hotjoin-editor.component';
import { TableUrlsEditorComponent } from './table-urls-editor.component';
import { TableLinkSessionComponent } from '../../extra-table-components/table-link-session.component'; 

import { LocalDataSource } from 'ng2-smart-table';

import { SessionsService } from '../../../services/sessions.service';
import { ToastrService } from '../../../services/toastr.service';

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

  constructor(private dialogService: NbDialogService, 
              private sessionsService: SessionsService,
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
    //this.source.load(this.data);
  }

  ngOnInit(){

    this.sessionsService.getSessions().subscribe(
      (res: any) => {
        this.source.load(res["data"]["owned"]);
        this.nInvited = res["data"]["nInvited"];
        this.nOwned = res["data"]["nOwned"];
      }, 
      (err: any) => {console.log(err); this.source.load([])}
    );

    if(this.route.snapshot.paramMap.get('deleted')){
      this.toastrService.makeSuccessToastr("Success", "Session deleted successfully");
    }

  }

  onDeleteConfirm(event) {
    this.dialogService.open(DeleteDialogComponent, {
        context: {
        title: 'Confirm',
        hash: event.data.hash,
        name: event.data.name, 
        event: event
        },
    }).onClose.subscribe( success => {
      if(success){
        this.toastrService.makeSuccessToastr("Success", "Session deleted successfully");
      }
    }
  );
  }

  ngOnDestroy() {
  }
}
