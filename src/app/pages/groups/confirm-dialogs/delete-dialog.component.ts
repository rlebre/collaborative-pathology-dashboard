import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['delete-dialog.component.scss'],
})
export class DeleteDialogComponent {

  @Input() title: string;

  @Input() name: string; 

  //Table event
  @Input() event: any; 
  
  constructor(protected ref: NbDialogRef<DeleteDialogComponent>, 
    private router: Router,
    private groupsService: GroupsService) {

  }

  dismiss() {
    this.ref.close();
  }

  delete(){
    this.groupsService.deleteGroup(this.name).subscribe(
      (res: any) => {
        if(res.success){
          console.log("Group deleted with success");
          this.ref.close(true); 
          //If this delete came from a table, we don't want redirect
          if(!this.event)
            this.router.navigate(['/pages/groups/my-groups', {deleted: true}]);
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
