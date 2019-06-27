import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService } from '@nebular/theme';

import { SessionCreate } from '../../../data-models/SessionCreate'; 
import { InvUser } from '../../../data-models/InvUser';
import { CaseStudy } from '../../../data-models/CaseStudy';


import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./create-session.component.scss'],
  templateUrl: './create-session.component.html',
})
export class CreateSessionComponent implements OnDestroy, OnInit {

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

  constructor(protected dateService: NbDateService<Date>) {
    this.users = [new InvUser("", true)];
    this.session = new SessionCreate();
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

    this.selectedImage = this.images[0];

  }
  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
