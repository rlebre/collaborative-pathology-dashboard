import {Component, OnInit, OnDestroy} from '@angular/core';

import { CreateGroupService } from '../../../services/create-group.service';

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

  constructor(private createGroupService: CreateGroupService) {
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
    this.group = new Group(this.groupName, this.users); 
    console.log(JSON.stringify(this.group)); 
    console.log(this.group.groupname); 
    console.log(this.group.users); 
    //this.createGroupService.postGroup(this.group).subscribe(theme => {
    //  console.log("Received stuff from the service: " + theme);
    //});
  }

  onCloseWarn(){
    this.fewUsers=false; 
  }

}
