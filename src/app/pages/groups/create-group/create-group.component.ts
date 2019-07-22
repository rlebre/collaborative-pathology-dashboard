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

  members :InvUser[];
  user_perms: any[];
  user_roles: any[];
  group :Group;
  groupName: string;
  viewOnlyAdd: boolean;
  fewUsers: boolean;
  groupCreatedSuccess: boolean;

  constructor(private groupsService: GroupsService) {
    
  }

  ngOnInit() {

    this.members = [new InvUser("", {}, "guest")];
    this.user_perms = [[]];
    this.user_roles = [[]];

  }

  ngOnDestroy() {

  }

  sendGroup(){
    this.group = new Group();
    this.group.setGroupName(this.groupName);

    //Process the perms and roles
    if(this.members.length > 0){
      for(var i = 0; i<this.members.length; i++){
        let perms = {};
        let role = "";

        for(var e = 0; e<this.user_perms[i].length; e++){
          perms[this.user_perms[i][e]['id']] = true;
        }
        this.members[i].permissions = perms;

        //By default role is already guest, so if it doesn't exist we dont do nothing
        if(this.user_roles[i][0]){
          role = this.user_roles[i][0]['id'];
          this.members[i].role = role;
        }
      
      }
    }

    this.group.setUsers(this.members); 
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
