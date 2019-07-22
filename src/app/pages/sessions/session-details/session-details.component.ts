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
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./session-details.component.scss'],
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent implements OnDestroy, OnInit {

  session: SessionDetails = new SessionDetails();

  sesssionHash: number; 

  members: InvUser[];
  links: string[];

  minStart: Date;
  minEnd: Date;
  startAt: Date;

  images :CaseStudy[];

  users :InvUser[];

  dropdown_tagsList = [];
  selectedTags = [];
  dropdownTagsSettings = {
  };

  editorData: any;

  editorConfig = {}
  showSaveBtn: boolean = false;  

  constructor(protected dateService: NbDateService<Date>,
              protected dialogService: NbDialogService,
              protected sessionService: SessionsService,
              protected toastrService: ToastrService,
              protected route: ActivatedRoute) {

   
      this.sesssionHash = +this.route.snapshot.paramMap.get('sessionHash');
      this.users = [];

      this.dropdownTagsSettings = { 
        singleSelection: false, 
        text:"Select Tags",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        badgeShowLimit: 3,
      };
      

  }
  ngOnInit() {

    this.sessionService.getSessionDetails(this.sesssionHash).subscribe(
      (res: any) => {
        this.session = res.data;
        this.members = this.session.participatingUsers;
        this.links = res.urls;
        if(this.session.startDate)
          this.startAt = new Date(res.data.startDate);
        for(var i = 1; i<=this.session.tags.length; i++){
          let obj = {"id": i, "itemName": this.session.tags[i-1]};
          this.dropdown_tagsList.push(obj);
          this.selectedTags.push(obj);
        }
        
      },
      (err: any) => { console.log(err); }
    );

  }

  ngOnDestroy() {
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

    this.session.participatingUsers = this.members;
    let session_tags: string[] = [];
    for(var i = 0; i < this.selectedTags.length; i++){
      session_tags.push(this.selectedTags[i]['itemName']);
    }
    this.session.tags = session_tags;
    //Check the values .. 
    this.sessionService.updateSession(this.session).subscribe(
      (res: any) => {
        //Show success message.
        this.toastrService.makeSuccessToastr("Success", "You edited your session");
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
