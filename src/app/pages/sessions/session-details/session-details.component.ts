import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

import { SessionDetails } from '../../../data-models/SessionDetails'; 
import { InvUser } from '../../../data-models/InvUser';
import { CaseStudy } from '../../../data-models/CaseStudy';

import { DeleteDialogComponent } from '../confirm-dialogs/delete-dialog.component';

import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

import { NbDialogService } from '@nebular/theme';
import { SessionsService } from '../../../services/sessions.service';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./session-details.component.scss'],
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent implements OnDestroy, OnInit {

  session: SessionDetails = new SessionDetails();

  sesssionHash: number; 

  members: InvUser[];
  members_details: any[];
  members_to_remove: boolean[] = [];
  links: string[];

  minStart: Date;
  minEnd: Date;
  startAt: Date;

  images :CaseStudy[];

  users :InvUser[];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  editorData: any;

  editorConfig = {}

  showSaveBtn: boolean = false;

  settings = {
    actions:{
      position: 'right',
    },
    columns: {
      imageUrl: {
        title: 'Case Study',
        type: 'custom',
        class: 'centered',
        filter: false,
        sort: false,
        width: '15%',
        //renderComponent: TableImageEditorComponent
      },
      seriesID: {
        title: 'Study ID',
        type: 'string',
        class: 'centered'
      },
      studyID: {
        title: 'Image ID', 
        class: 'centered',
        type: 'string',
      },
    },
  };

  constructor(protected dateService: NbDateService<Date>,
              protected dialogService: NbDialogService,
              protected sessionService: SessionsService,
              protected route: ActivatedRoute) {

   
      this.sesssionHash = +this.route.snapshot.paramMap.get('sessionHash');
      this.users = [];

  }
  ngOnInit() {

    this.sessionService.getSessionDetails(this.sesssionHash).subscribe(
      (res: any) => {
        console.log(res);
        this.session = res.data;
        this.members = this.session.participatingUsers;
        this.members_details = res['user_details'];
        this.links = res.urls;
        if(this.session.startDate)
          this.startAt = new Date(res.data.startDate);
        
        for(var i = 0; i<this.members.length; i++){
          this.members_to_remove.push(false);
        }
        
      },
      (err: any) => { console.log(err); }
    );

  }

  ngOnDestroy() {
  }

  addUser(event){
    for(let i = 0; i<event.usersToAdd; i++){
      this.users.push(new InvUser("", event.viewOnlyAdd)); 
    }
  }

  showSaveButton(event){
    this.showSaveBtn = true;
  }

  removeUser(index: number){
    if(this.users.length > 1)
      this.users.splice(index,1);
  }

  joinSession(){
    window.location.href= this.links[0];
  }

  replaySession(){
    window.location.href= this.links[1];
  }

  editSession(){

    //First, remove from the members list those marked as "removed"
    for(var i = 0; i<this.members.length; i++){
      if(this.members_to_remove[i]){
        this.members.splice(i, 1);
      }
    }

    this.session.participatingUsers = this.members;

    //Check the values .. 
    this.sessionService.updateSession(this.session).subscribe(
      (res: any) => {
        //Show success message.
        console.log(res);
      },
      (err: any) => { console.log(err); }
    );

  }

  deleteSession(){

    this.dialogService.open(DeleteDialogComponent, {
      context: {
      title: 'Confirm',
      name: this.session.name, 
      hash: this.session.hash,
      },
    });

  }

}
