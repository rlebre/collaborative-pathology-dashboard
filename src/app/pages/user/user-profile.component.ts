import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./user-profile.component.scss'],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnDestroy, OnInit {

  constructor(protected dateService: NbDateService<Date>) {

  }
  ngOnInit() {

  }

  ngOnDestroy() {
  }

}
