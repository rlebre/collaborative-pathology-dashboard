import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { DeleteDialogComponent } from '../confirm-dialogs/delete-dialog.component';

import { Group } from '../../../data-models/Group'; 
import { InvUser } from '../../../data-models/InvUser'; 

import { NbDialogService } from '@nebular/theme';
import { GroupsService } from '../../../services/groups.service';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-group-details',
  styleUrls: ['./group-details.component.scss'],
  templateUrl: './group-details.component.html',
})
export class GroupDetailsComponent implements OnInit, OnDestroy {

  private groupId:string; 
  members: InvUser[];
  group :Group; 
  groupName: string; 
  showSaveButton: boolean;

  constructor(private route: ActivatedRoute,
              private dialogService: NbDialogService, 
              private toastrService: ToastrService,
              private groupsService: GroupsService) {

    this.group = new Group();

    this.showSaveButton = false; 

    this.groupId = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroupDetails(this.groupId).subscribe( 
      (res: any)=>{
        this.members = res.data.users;
        this.groupName = res.data.groupname;
      }, 
      (err: any)=>{
        console.log(err);
      } 
    );
 
  }

  ngOnInit() {
    

  }

  ngOnDestroy() {

  }

  deleteGroup() {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        title: 'Confirm',
        name: this.groupName,
      },
    });
  }

  saveGroup(){
    this.group.setGroupName(this.groupName);
    this.group.setUsers(this.members);
    this.groupsService.updateGroup(this.group).subscribe(
      (res: any) => {
        if(res.success)
          this.toastrService.makeSuccessToastr("Success", "You edited your group successfully");
      }, 
      (err: any) => {console.log(err)}, 
    );
  }

  showSaveBtn(){
    if(!this.showSaveButton){
      this.showSaveButton = true;
    }
  }

}
