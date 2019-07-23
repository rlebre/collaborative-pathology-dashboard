import {Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';

import { InvUser } from '../../data-models/InvUser';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'ngx-add-user-widget',
  styleUrls: ['./add-user-widget.component.scss'],
  templateUrl: './add-user-widget.component.html',
})
export class AddUserWidgetComponent implements OnInit, OnDestroy {

  @Input() members: InvUser[];
  @Input() user_perms: any[];
  @Input() user_roles: any[];

  usersToAdd: number; 
  fewUsers: boolean;

  dropdownPermsSettings = {
    text: "Select Permissions",
    enableSearchFilter: true,
    badgeShowLimit: 1,
  };

  dropdownRolesSettings = {
    text: "Select Role",
    singleSelection: true,
    enableSearchFilter: true,
    badgeShowLimit: 1,
  };

  rootPermsSelectedItems: any[] = [];
  rootRolesSelectedItems: any[] = [];
  
  dropdownPermsList = [];
  dropdownRolesList = [];

  constructor(protected generalService: GeneralService) { 
    this.usersToAdd = 1;
  }

  ngOnInit(){
    this.dropdownPermsList = this.generalService.getPerms();
    this.dropdownRolesList = this.generalService.getRoles();
  }

  addUser(){
    for(let i = 0; i<this.usersToAdd; i++){
      this.members.push(new InvUser("", {}, "guest")); 
      this.user_perms.push([...this.rootPermsSelectedItems]);
      this.user_roles.push([...this.rootRolesSelectedItems]);
    }
    this.fewUsers = false; 
  }

  removeUser(index: number){
    if(this.members.length > 1){
      this.members.splice(index,1);
      this.user_perms.splice(index,1);
      this.user_roles.splice(index,1);
    }
    else
      this.fewUsers = true; 
  }

  ngOnDestroy() {
  }
}
