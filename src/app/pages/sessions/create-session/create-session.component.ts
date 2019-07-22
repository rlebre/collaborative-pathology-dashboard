import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

import { SessionCreate } from '../../../data-models/SessionCreate'; 
import { InvUser } from '../../../data-models/InvUser';
import { CaseStudy } from '../../../data-models/CaseStudy';

import { TableImageEditorComponent } from './table-image-editor.component';
import { TravelDialogComponent } from '../confirm-dialogs/travel-dialog.component';

import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

import { SessionsService } from '../../../services/sessions.service';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./create-session.component.scss'],
  templateUrl: './create-session.component.html',
})
export class CreateSessionComponent implements OnDestroy, OnInit {

  session: SessionCreate;
  validName: boolean;
  session_tags: string[] = [];
  userTags: string[] = [];
  tagInserted: string = "";

  images :CaseStudy[];
  selectedImage: CaseStudy;
  imageSelected: boolean;

  users :InvUser[];
  user_perms: any[];
  user_roles: any[];
  groups: string[] = [];

  minDate: Date;
  startDate: Date; 
  endDate: Date;

  dropdownList = [];
  dropdown_tagsList = [];
  selectedItems = [];
  selectedTags = [];
  dropdownSettings = {};
  dropdownTagsSettings = {};

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
              protected sessionsService: SessionsService,
              protected generalService: GeneralService) {
    
    this.session = new SessionCreate();

    this.users = [];
    this.user_perms = [];
    this.user_roles = [];
    this.minDate = this.dateService.today();
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

    let tmp_tags = this.generalService.getDefaultTags();
    for(var i = 1; i<=tmp_tags.length; i++){
      let obj = {"id": i, "itemName": tmp_tags[i-1]};
      this.dropdown_tagsList.push(obj);
      this.selectedTags.push(obj);
    }
  }
  ngOnInit() {

    this.imageSelected = false; 

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select Groups",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
    };

    this.dropdownTagsSettings = { 
      singleSelection: false, 
      text:"Select Tags",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
    };

  }

  ngOnDestroy() {
  }

  addTag(){
    if(this.tagInserted.length > 2)
      this.userTags.push(this.tagInserted)
    else{
      //show error
    }
  }

  removeTag(index: number){
    this.userTags.splice(index,1);
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
    
    //Setting up the tags
    for(var i = 0; i < this.selectedTags.length; i++){
      this.session_tags.push(this.selectedTags[i]['itemName']);
    }

    this.session_tags = [...this.session_tags, ...this.userTags];
    this.session.tags = this.session_tags;

    if(this.users.length > 0){
      for(var i = 0; i<this.users.length; i++){
        let perms = {};
        let role = "";
        for(var e = 0; e<this.user_perms[i].length; e++){
          perms[this.user_perms[i][e]['id']] = true;
        }
        this.users[i].permissions = perms;
        
        //By default role is already guest, so if it doesn't exist we dont do nothing
        if(this.user_roles[i][0]){
          role = this.user_roles[i][0]['id'];
          this.users[i].role = role;
        }

      }
      this.session.participatingUsers = this.users;
      console.log(this.session.participatingUsers);
    }      

    for(var i = 0; i<this.selectedItems.length; i++){
      this.groups.push(this.selectedItems[i]['itemName']);
      this.session.groups = this.groups;
    }

    this.session.caseStudy = this.selectedImage;
   
    this.sessionsService.createSession(this.session).subscribe(
      (res: any) => {
        if(res.redirect_link){
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
