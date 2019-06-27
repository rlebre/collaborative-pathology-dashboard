import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['delete-dialog.component.scss'],
})
export class DeleteDialogComponent {

  @Input() title: string;

  //To indicate which type of data this dialog is going to delete
  //0 for groups, 1 for sessions
  @Input() type: number;

  @Input() name: string; 

  //Table event
  @Input() event: any; 
  
  constructor(protected ref: NbDialogRef<DeleteDialogComponent>, private router: Router,) {

  }

  dismiss() {
    this.ref.close();
  }

  delete(){
    if(this.event)
      this.event.confirm.resolve();
    else{
      if(this.type == 0){
        this.router.navigate(['../../my-groups']);
      }
    }
    //call delete event service
    this.ref.close(); 
  }
}
