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
  user_perms: any[];
  group :Group;
  groupName: string;
  usersToAdd: number;
  viewOnlyAdd: boolean;
  fewUsers: boolean;
  groupCreatedSuccess: boolean;

  dropdownPermsSettings = {};

  dropdownPermsList = [
    {"id":"movementPermission","itemName":"Movement", "category": "Image"},
    {"id":"flipPermission","itemName":"Flip", "category": "Image"},
    {"id":"annotationPermission","itemName":"Annotation", "category": "Image"},
    {"id":"adjustmentPermission","itemName":"Adjustment", "category": "Image"},
    {"id":"moderatorPermission","itemName":"Moderator", "category": "Moderation"},
  ];

  constructor(private groupsService: GroupsService) {
    this.users = [new InvUser("", {})];
    this.user_perms = [];

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
      this.users.push(new InvUser("", {})); 
      this.user_perms.push([]);
    }
    this.fewUsers = false; 
  }

  removeUser(index: number){
    if(this.users.length > 1){
      this.users.splice(index,1);
      this.user_perms.splice(index,1);
    }
    else
      this.fewUsers = true; 
  }

  sendGroup(){
    this.group = new Group();
    this.group.setGroupName(this.groupName);

    //Process the perms
    if(this.users.length > 0){
      for(var i = 0; i<this.users.length; i++){
        let perms = {};
        for(var e = 0; e<this.user_perms[i].length; e++){
          perms[this.user_perms[i][e]['id']] = true;
        }
        this.users[i].permissions = perms;
      }
    }

    console.log(this.users);

    this.group.setUsers(this.users); 
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
