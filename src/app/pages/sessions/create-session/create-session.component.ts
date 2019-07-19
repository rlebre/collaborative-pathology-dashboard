import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService, NbDialogService } from '@nebular/theme';
import { SessionsService } from '../../../services/sessions.service';
import { LocalDataSource } from 'ng2-smart-table';

import { SessionCreate } from '../../../data-models/SessionCreate'; 
import { InvUser } from '../../../data-models/InvUser';
import { CaseStudy } from '../../../data-models/CaseStudy';

import { TableImageEditorComponent } from './table-image-editor.component';
import { TravelDialogComponent } from '../confirm-dialogs/travel-dialog.component';

import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./create-session.component.scss'],
  templateUrl: './create-session.component.html',
})
export class CreateSessionComponent implements OnDestroy, OnInit {

  session: SessionCreate;
  validName: boolean;

  minStart: Date;
  minEnd: Date;

  startDate: Date; 
  endDate: Date;

  images :CaseStudy[];
  selectedImage: CaseStudy;
  imageSelected: boolean;

  users :InvUser[];
  user_perms: any[];
  groups: string[] = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownPermsSettings = {};

  dropdownPermsList = [
    {"id":"movementPermission","itemName":"Movement", "category": "Image"},
    {"id":"flipPermission","itemName":"Flip", "category": "Image"},
    {"id":"annotationPermission","itemName":"Annotation", "category": "Image"},
    {"id":"adjustmentPermission","itemName":"Adjustment", "category": "Image"},
    {"id":"moderatorPermission","itemName":"Moderator", "category": "Moderation"},
  ];

  editorData: any;

  editorConfig = {}

  settings = {
    actions:{
      add: false,
      edit: false,
      delete: false,
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
        renderComponent: TableImageEditorComponent
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

  source: LocalDataSource = new LocalDataSource();


  constructor(protected dateService: NbDateService<Date>,
              protected dialogService: NbDialogService,
              protected sessionsService: SessionsService) {
    
    this.session = new SessionCreate();

    this.users = [];
    this.user_perms = [];
    this.minStart = this.dateService.today();
    this.minEnd = this.minStart;
    this.editorData = "";

    this.images = [new CaseStudy(), new CaseStudy(), new CaseStudy(), new CaseStudy()];
    this.images[0].imageUrl = "https://i.imgur.com/5dHXrIE.png";
    this.images[0].seriesID = 2;
    this.images[0].studyID = 2;

    this.images[1].imageUrl = "https://i.imgur.com/5dHXrIE.png";
    this.images[1].seriesID = 3;
    this.images[1].studyID = 3;


    this.images[2].imageUrl = "https://i.imgur.com/5dHXrIE.png";
    this.images[2].seriesID = 3;
    this.images[2].studyID = 3;


    this.images[3].imageUrl = "https://i.imgur.com/5dHXrIE.png";
    this.images[3].seriesID = 4;
    this.images[3].studyID = 4;

    this.source.load(this.images);

    this.sessionsService.getSetupInfo().subscribe(
      (res: any) => {
        let userGroups: string[] = res.data.userGroups;
        for(var i = 1; i<=userGroups.length; i++){
          let obj = {"id": i, "itemName": userGroups[i-1]};
          this.dropdownList.push(obj);
        }
      },
      (err: any) => { console.log(err); }
    );

  }
  ngOnInit() {

    this.imageSelected = false; 

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select Groups",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
    };

    this.dropdownPermsSettings = { 
      singleSelection: false, 
      text:"Select Perms",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
    };

  }

  ngOnDestroy() {
  }

  addUser(event){
    for(let i = 0; i<event.usersToAdd; i++){
      this.users.push(new InvUser("", event.viewOnlyAdd));
      this.user_perms.push([]);
    }
  }

  removeUser(index: number){
    if(this.users.length > 1){
      this.users.splice(index,1);
      this.user_perms.splice(index,1);
    }
  }

  onRowSelect(event) {
    this.selectedImage = event.data;
    this.imageSelected = true;
  }

  createSession(){

    //Setting up the dates
    if(this.startDate)
      this.session.startDate = this.startDate;
    
    if(this.endDate)
      this.session.endDate = this.endDate;
    
    if(this.editorData)
      this.session.email_message = this.editorData;
    
    if(this.users.length > 0){
      for(var i = 0; i<this.users.length; i++){
        let perms = {};
        for(var e = 0; e<this.user_perms[i].length; e++){
          perms[this.user_perms[i][e]['id']] = true;
        }
        this.users[i].permissions = perms;
      }
      this.session.participatingUsers = this.users;
    }

    console.log(this.session.participatingUsers);
      

    for(var i = 0; i<this.selectedItems.length; i++){
      this.groups.push(this.selectedItems[i]['itemName']);
      this.session.groups = this.groups;
    }

    this.session.caseStudy = this.selectedImage;

    this.sessionsService.createSession(this.session).subscribe(
      (res: any) => { 
        if(res.redirect_link){
          console.log(res);
          this.open(res.redirect_link);
        }
      },
      (err: any) => { console.log(err) }
    );;

  }

  open(url: string) {
    this.dialogService.open(TravelDialogComponent, {
      context: {
        url: url,
      },
    });
  }
}
