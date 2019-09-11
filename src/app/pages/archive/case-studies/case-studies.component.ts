import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { NbDialogService } from '@nebular/theme';

import { SessionsService } from '../../../services/sessions.service';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-case-studies',
  styleUrls: ['./case-studies.component.scss'],
  templateUrl: './case-studies.component.html',
})
export class CaseStudiesComponent implements OnDestroy {

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

  onDeleteConfirm(event) {
  }

  ngOnDestroy() {
  }
}
