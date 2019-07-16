import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { GeneralService } from './../../services/general.service';
import { UserLoggedIn, AccType } from '../../data-models/UserLoggedIn';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'nb-playground-oauth2-callback',
  template: `
    <div>Authenticating</div>
  `,
})
export class OAuth2CallbackComponent implements OnDestroy {

  alive = true;

  constructor(private authService: NbAuthService, private tokenService: NbTokenService,
      private generalService: GeneralService, private router: Router, private userService: UserService) {

    this.authService.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() /*&& authResult.getRedirect()*/) {

          this.generalService.verifyOrCreateGoogleUser(authResult["response"]["access_token"]).subscribe(
            (userData: any) => {
              //handle results from backend here
              console.log(userData);
              let user: UserLoggedIn = new UserLoggedIn(userData.email, userData.personal_information.firstname,
                userData.personal_information.lastname, userData.photo_url, AccType.GOOGLE);
              authResult['token']['payload']['user'] = user;
              this.userService.setUserLoggedIn(user);
              this.tokenService.set(authResult.getToken());
              this.router.navigate(['/']);
            }, 
            (error: any) => {
              console.log("could not connect to backend and retrieve data");
              console.log(error);
              //handle possible errors from the backend here
            },
          );

        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}