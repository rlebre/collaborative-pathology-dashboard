import {Component, OnInit, OnDestroy} from '@angular/core';
import { UserData } from '../../../@core/data/users';
import {ActivatedRoute} from '@angular/router';

import { DeleteDialogComponent } from '../confirm-dialogs/delete-dialog.component';

import { Group } from '../../../data-models/Group'; 
import { InvUser } from '../../../data-models/InvUser'; 
import { UserDetails } from '../../../data-models/UserDetails'; 

import { NbDialogService } from '@nebular/theme';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'ngx-group-details',
  styleUrls: ['./group-details.component.scss'],
  templateUrl: './group-details.component.html',
})
export class GroupDetailsComponent implements OnInit, OnDestroy {

  private groupId:string; 
  members: UserDetails[];
  users :InvUser[]; 
  group :Group; 
  groupName: string; 
  fewUsers: boolean; 
  showSaveButton: boolean;

  constructor(private route: ActivatedRoute,
              private userService: UserData, 
              private dialogService: NbDialogService, 
              private groupsService: GroupsService) {

    this.users = [];
    this.group = new Group();

    this.fewUsers = false; 
    this.showSaveButton = false; 

    this.groupId = this.route.snapshot.paramMap.get('id');
 
  }

  ngOnInit() {
    this.groupsService.getGroupDetails(this.groupId).subscribe( 
      (res: any)=>{
        this.members = res.data.users;
        this.groupName = res.data.groupname;
        console.log(res);
      }, 
      (err: any)=>{
        console.log(err);
      } 
    );

  }

  ngOnDestroy() {

  }

  addUser(event){
    for(let i = 0; i<event.usersToAdd; i++){
      this.users.push(new InvUser("", event.viewOnlyAdd)); 
    }
    this.fewUsers = false; 
  }

  removeUser(index: number){
    if( (this.users.length + this.members.length) > 1)
      this.users.splice(index,1);
    else
      this.fewUsers = true; 
  }

  removeUserPrevious(index: number){
    if( (this.users.length + this.members.length) > 1)
      this.members.splice(index,1);
    else
      this.fewUsers = true; 
  }

  onCloseWarn(){
    this.fewUsers=false; 
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
    this.members.forEach( (member) => {
      this.users.forEach( (user) =>{
        if (member.email != user.email)
          this.users.push(new InvUser(member.email, member.canEdit));
      });
    });
    console.log(this.users); 
    this.group.setGroupName(this.groupName);
    this.group.setUsers(this.members);
    this.groupsService.updateGroup(this.group).subscribe(
      (res: any) => {
        //Show success msg or smth
      }, 
      (err: any) => {console.log(err)}, 
    );
    //call service to update this group
  }

  showSaveBtn(){
    if(!this.showSaveButton){
      this.showSaveButton = true;
    }
  }

}
