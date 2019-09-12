import {Component, OnInit, OnDestroy,  AfterViewInit, ViewChild} from '@angular/core';

import { GroupsService } from '../../../services/groups.service';
import { ToastrService } from '../../../services/toastr.service';

import { AddUserWidgetComponent } from '../../../widgets/add-user-widget/add-user-widget.component';

import { Group } from '../../../data-models/Group';
import { InvUser } from '../../../data-models/InvUser';

@Component({
  selector: 'ngx-create-group',
  styleUrls: ['./create-group.component.scss'],
  templateUrl: './create-group.component.html',
})
export class CreateGroupComponent implements OnInit, OnDestroy, AfterViewInit {

  members :InvUser[];
  user_perms: any[];
  user_roles: any[];
  group :Group;
  groupName: string = "";
  viewOnlyAdd: boolean;
  minimum_users: boolean;
  users_valid: boolean;

  @ViewChild(AddUserWidgetComponent)
  private widget: AddUserWidgetComponent;

  @ViewChild('name') name: any;

  ngAfterViewInit() {
  }

  try(){
    console.log(this.name.valid);
    console.log(this.users_valid)
  }

  constructor(private groupsService: GroupsService,
              private toastrService: ToastrService) {
    
  }

  ngOnInit() {

    this.members = [new InvUser("", {}, "Guest")];
    this.user_perms = [[]];
    this.user_roles = [[]];
    this.minimum_users = true;

    this.users_valid = this.widget.usersForm.valid;


  }

  ngOnDestroy() {

  }

  sendGroup(){
    this.group = new Group();
    this.group.setGroupName(this.groupName);

    //Process the perms and roles
    if(this.members.length > 0){
      for(var i = 0; i<this.members.length; i++){
        //All by default are false
        let perms = {"movementPermission": false, "flipPermission": false, "annotationPermission": false, "adjustmentPermission": false};
        
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
        this.toastrService.makeSuccessToastr("Success", "You created your group successfully");
      }
    }, 
    (err: any) => {console.log(err)});
  }

}
