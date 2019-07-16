import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'travel-dialog.component.html',
  styleUrls: ['travel-dialog.component.scss'],
})
export class TravelDialogComponent {

  @Input() url: string;
  
  constructor(protected ref: NbDialogRef<TravelDialogComponent>, protected router: Router) {
  }

  travel(){
    this.router.navigateByUrl(this.url);
  }

  dismiss() {
    this.ref.close();
  }

}
