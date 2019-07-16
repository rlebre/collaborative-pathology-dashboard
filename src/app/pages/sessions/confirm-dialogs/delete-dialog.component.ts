import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

import { SessionsService } from '../../../services/sessions.service';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['delete-dialog.component.scss'],
})
export class DeleteDialogComponent {

  @Input() title: string;

  @Input() name: string; 

  @Input() hash: number;

  //Table event
  @Input() event: any; 
  
  constructor(protected ref: NbDialogRef<DeleteDialogComponent>, 
    private router: Router,
    private sessionsService: SessionsService) {

  }

  dismiss() {
    this.ref.close();
  }

  delete(){
    this.sessionsService.deleteSession(this.hash).subscribe(
      (res: any) => {
        if(res.success){
          console.log("Session deleted with success");
          this.ref.close(true);
          //If this delete came from a table, we don't want redirect
          if(!this.event)
            this.router.navigate(['/pages/sessions/dashboard', {deleted: true}]);
          else
            this.event.confirm.resolve();
        }
        else{
          //Deal with failure
          this.ref.close(); 
        }
      }, 
      (err: any) => { console.log(err); this.ref.close(); }
    );
  }

}
