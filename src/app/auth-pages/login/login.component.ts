import { Component, OnDestroy } from '@angular/core';
import { NbLoginComponent, NbAuthToken, NbAuthService } from '@nebular/auth';
import { UserService } from '../../services/user-service';

import { NbAuthResult } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {

  alive = true;
  token: NbAuthToken;

  user: any = {};

  loginLocal(){

    this.errors = this.messages = [];
    this.submitted = true;

    this.service.authenticate('email', this.user).subscribe((result: NbAuthResult) => {
      let canRedirect: boolean = true;
      this.submitted = false;
      this.token = result.getToken();
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
        console.log("Error occured while logging you in.");
      }
      
      if(canRedirect){
        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
      }
      
    });

  }

  loginGoogle() {
    this.service.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {console.log("HAI??")});
  }

  ngOnDestroy(){
    this.alive = false;
  }

    
}