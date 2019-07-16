import {Component, OnDestroy, OnInit} from '@angular/core';

import { ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

import { NbDateService } from '@nebular/theme';
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

  config: ToasterConfig;

  index = 1;
  destroyByClick = true;
  duration = 3500;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbToastStatus = NbToastStatus.SUCCESS;

  title = 'Success!';
  content = `You edited your profile!`;

  constructor(protected dateService: NbDateService<Date>,
              protected userService: UserService,
              private toastrService: NbToastrService) {

  }

  ngOnInit() {
    console.log("OnInit");
    this.user = this.userService.getUserLoggedIn();

    console.log(this.user);
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
    console.log("OnSubmit");
    console.log(this.user);
    this.userService.updateProfile(this.user, this.imageUploaded).subscribe(
      (res: any) => {
        if(res.success){
          this.makeToast();
        }
      },
      (err: any) => { console.log(err); }  
    );
  }

  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }

  private showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }

  ngOnDestroy() {

  }

}
