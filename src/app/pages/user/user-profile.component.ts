import {Component, OnDestroy, OnInit} from '@angular/core';

import { NbDateService } from '@nebular/theme';
import { ToastrService } from '../../services/toastr.service';
import { UserService } from '../../services/user-service';
import { UserLoggedIn } from '../../data-models/UserLoggedIn';

@Component({
  selector: 'ngx-create-session',
  styleUrls: ['./user-profile.component.scss'],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnDestroy, OnInit {

  user: UserLoggedIn;
  imageUploaded: File;
  imageSrc: string;

  constructor(protected dateService: NbDateService<Date>,
              protected userService: UserService,
              protected toastrService: ToastrService) {

  }

  ngOnInit() {
    this.user = this.userService.getUserLoggedIn();

    this.imageSrc = this.user.photo_url;
  }

  onFileChanged(event) {
    this.imageUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onSubmit(){
    this.userService.updateProfile(this.user, this.imageUploaded).subscribe(
      (res: any) => {
        if(res.success){
          this.toastrService.makeSuccessToastr("Success", "You edited your profile");
        }
      },
      (err: any) => { console.log(err); }  
    );
  }

  ngOnDestroy() {

  }

}
