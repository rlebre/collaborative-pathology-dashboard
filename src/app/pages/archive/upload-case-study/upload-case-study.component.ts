import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { NbDialogService } from '@nebular/theme';

import { SessionsService } from '../../../services/sessions.service';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-upload-case-study',
  styleUrls: ['./upload-case-study.component.scss'],
  templateUrl: './upload-case-study.component.html',
})
export class UploadCaseStudyComponent implements OnDestroy {

  nOwned :number = 0; 
  nInvited:number = 0; 
  nRead:number = 0; 

  constructor(private dialogService: NbDialogService, 
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
    //this.source.load(this.data);
  }

  ngOnInit(){

  }

  ngOnDestroy() {
  }
}
