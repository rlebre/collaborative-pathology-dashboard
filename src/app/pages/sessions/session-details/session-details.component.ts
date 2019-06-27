import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

import { SessionCreate } from '../../../data-models/SessionCreate'; 
import { InvUser } from '../../../data-models/InvUser';
import { CaseStudy } from '../../../data-models/CaseStudy';
import { UserDetails } from '../../../data-models/UserDetails'; 


import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./session-details.component.scss'],
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent implements OnDestroy, OnInit {

    sesssionHash: number; 

    members: UserDetails[];

  hasHotJoin: boolean;
  maxHotJoinUsers: number;

  minStart: Date;
  minEnd: Date;

  startHour: number;
  startMins: number;
  endHour: number;
  endMins: number;

  images :CaseStudy[];
  isSingleView: boolean;
  selectedImage: CaseStudy;

  users :InvUser[];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  session: SessionCreate;

  editorData: any;

  editorConfig = {}

  constructor(protected dateService: NbDateService<Date>, protected route: ActivatedRoute) {
    let mock_data: UserDetails[] = [
        {email: "aaa@gmail.com", firstname: "Rui", lastname: "Jesus", canEdit: false, picture: "assets/images/jack.png"}
        ,{email: "aaa@gmail.com", firstname: "Rui", lastname: "Jesus", canEdit: true, picture: "assets/images/jack.png"}
      ];
      this.members = mock_data;
      this.sesssionHash = +this.route.snapshot.paramMap.get('sessionHash');
      this.users = [new InvUser("", true)];

  }
  ngOnInit() {

  }

  ngOnDestroy() {
  }

  addUser(event){
    for(let i = 0; i<event.usersToAdd; i++){
      this.users.push(new InvUser("", event.viewOnlyAdd)); 
    }
  }

  removeUser(index: number){
    if(this.users.length > 1)
      this.users.splice(index,1);
  }

  printEditor(){
    console.log(this.editorData);
    console.log(this.minStart.toString());
  }

  selectImage(image: CaseStudy){
    this.selectedImage = image;
    this.isSingleView = true;
  }

  

}
