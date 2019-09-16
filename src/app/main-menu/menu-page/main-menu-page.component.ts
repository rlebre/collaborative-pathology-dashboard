import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html',
})
export class MainMenuPageComponent implements OnDestroy, OnInit {

  constructor(protected dateService: NbDateService<Date>) {

  }
  ngOnInit() {

  }

  ngOnDestroy() {
  }

}