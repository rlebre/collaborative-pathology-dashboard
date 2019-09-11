import {Component, OnDestroy, OnInit} from '@angular/core';

import { NbDateService } from '@nebular/theme';
import { NbAuthService, NbAuthOAuth2Token } from '@nebular/auth';
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

  //Depending on the user account type, google or local, he can or cannot edit the mail
  can_edit_mail: boolean = true;

  constructor(protected dateService: NbDateService<Date>,
              protected userService: UserService,
              protected toastrService: ToastrService,
              private authService: NbAuthService) {

  }

  ngOnInit() {
    if(this.authService.getToken()['value'] instanceof NbAuthOAuth2Token){
      this.can_edit_mail = false;
      this.user = this.authService.getToken()['value']['payload']['user'];
    }
    else{
      this.user = this.authService.getToken()['value']['payload'];
    }
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
