import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { GeneralService } from './../../services/general.service';


@Component({
  selector: 'nb-playground-oauth2-callback',
  template: `
    <div>Authenticating</div>
  `,
})
export class OAuth2CallbackComponent implements OnDestroy {

  alive = true;

  constructor(private authService: NbAuthService, private tokenService: NbTokenService,
      private generalService: GeneralService, private router: Router) {

    this.authService.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() /*&& authResult.getRedirect()*/) {

          this.generalService.verifyOrCreateGoogleUser(authResult["response"]["access_token"]).subscribe(
            (userData: any) => {
              //handle results from backend here
              let user = {'name': userData.personal_information.firstname, 'picture': userData.personal_information.photo_url};
              authResult['token']['payload']['user'] = user;
              this.tokenService.set(authResult.getToken());
              this.router.navigate(['/']);
            }, 
            (error: any) => {
              console.log("could not connect to backend and retrieve data");
              console.log(error);
              //handle possible errors from the backend here
            },
          );

          /*generalService.getGoogleUserData(authResult["response"]["access_token"]).subscribe( 
            (userData: any) => { 
              let user = {'name': userData.displayName, 'picture': userData.image.url};
              authResult['token']['payload']['user'] = user;
              this.tokenService.set(authResult.getToken());
              console.log(authResult.getToken());
              sessionStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['/']);
              
              generalService.createGoogleUser(userData).subscribe((res: any) =>{
                if(res.success){
                  //User sucessfully authenticated and registered in backend
                  this.router.navigate(['/']);
                }
              });
             },
            (error: any) => { 
              //Handle google api error .. 
            }
          );
          */

        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}