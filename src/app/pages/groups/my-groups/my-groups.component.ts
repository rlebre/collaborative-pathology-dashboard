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


@Component({
  selector: 'ngx-my-groups',
  styleUrls: ['./my-groups.component.scss'],
  templateUrl: './my-groups.component.html',
})
export class MyGroupsComponent implements OnDestroy {

  event :any; 

  config: ToasterConfig;

  index = 1;
  destroyByClick = true;
  duration = 3500;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbToastStatus = NbToastStatus.SUCCESS;

  title = 'Success!';
  content = `You deleted the group!`;


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
    private toastrService: NbToastrService) {
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
    console.log(this.route.snapshot.paramMap.get('deleted'));
    if(this.route.snapshot.paramMap.get('deleted')){
      this.makeToast();   
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
            this.makeToast();   
          }
        }
      );
  }

  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }

  private showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }

  ngOnDestroy() {
    console.log("destroyed"); 
  }
}
