import {Component, OnInit, OnDestroy} from '@angular/core';

import { GroupsService } from '../../../services/groups.service';

import { Group } from '../../../data-models/Group';
import { InvUser } from '../../../data-models/InvUser';

@Component({
  selector: 'ngx-create-group',
  styleUrls: ['./create-group.component.scss'],
  templateUrl: './create-group.component.html',
})
export class CreateGroupComponent implements OnInit, OnDestroy {

  users :InvUser[];
  group :Group;
  groupName: string;
  usersToAdd: number;
  viewOnlyAdd: boolean;
  fewUsers: boolean;
  groupCreatedSuccess: boolean;

  constructor(private groupsService: GroupsService) {
    this.users = [new InvUser("", true)];

    this.usersToAdd = 1;
    this.viewOnlyAdd = false;
    this.fewUsers = false;
  }

  ngOnInit() {

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
    if(this.users.length > 1)
      this.users.splice(index,1);
    else
      this.fewUsers = true; 
  }

  sendGroup(){
    this.group = new Group();
    this.group.setGroupName(this.groupName);this.group.setUsers(this.users); 
    this.groupsService.postGroup(this.group).subscribe((res: any) => {
      if(res.success){
        console.log("Successfully created group");
        this.groupCreatedSuccess = true;
      }
    }, 
    (err: any) => {console.log(err)});
  }

  onCloseWarn(){
    this.fewUsers=false; 
  }

}
