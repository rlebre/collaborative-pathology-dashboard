import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./terms-page.component.scss'],
  templateUrl: './terms-page.component.html',
})
export class TermsPageComponent implements OnDestroy, OnInit {

  constructor(protected dateService: NbDateService<Date>) {

  }
  ngOnInit() {

  }

  ngOnDestroy() {
  }

}