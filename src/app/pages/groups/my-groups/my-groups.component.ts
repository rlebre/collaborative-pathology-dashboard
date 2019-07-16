import {Component, OnDestroy, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {ActivatedRoute} from '@angular/router';

import { DeleteDialogComponent } from '../confirm-dialogs/delete-dialog.component';
import { TableGroupsEditorComponent } from './table-groups-editor.component';
import { TableLinkComponent } from '../../extra-table-components/table-link.component'; 


import { ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

import { NbDialogService, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

import { GroupsService } from '../../../services/groups.service';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-my-groups',
  styleUrls: ['./my-groups.component.scss'],
  templateUrl: './my-groups.component.html',
})
export class MyGroupsComponent implements OnDestroy {

  event :any; 

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

  constructor(private route: ActivatedRoute,
    private dialogService: NbDialogService, 
    private groupsService: GroupsService,
    private toastrService: ToastrService) {
  }

  ngOnInit(){

    //Fetch this users groups
    this.groupsService.getUserGroups().subscribe( 
      (res: any) => {
        console.log(res);
        this.source.load(res['data']);
      },
      (err: any) => {console.log(err);}
    );

    //Check if we came from a groups page that was deleted
    if(this.route.snapshot.paramMap.get('deleted')){
      this.toastrService.makeSuccessToastr("Success", "Group deleted successfully");   
    }
  }

  onDeleteConfirm(event) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        title: 'Confirm',
        name: event.data.groupname, 
        event: event
      },
    }).onClose.subscribe( success => {
          if(success){
            //show toast
            this.toastrService.makeSuccessToastr("Success", "Group deleted successfully");   
          }
        }
      );
  }

  ngOnDestroy() {
    console.log("destroyed"); 
  }
}
