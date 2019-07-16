import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'travel-dialog.component.html',
  styleUrls: ['travel-dialog.component.scss'],
})
export class TravelDialogComponent {

  @Input() url: string;
  
  constructor(protected ref: NbDialogRef<TravelDialogComponent>,
              protected router: Router,
              @Inject(DOCUMENT) private document: any) {
  }

  travel(){
    this.document.location.href = this.url;
  }

  dismiss() {
    this.ref.close();
  }

}
