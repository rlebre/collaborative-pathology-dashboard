import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
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

  constructor(private authService: NbAuthService, private generalService: GeneralService, private router: Router) {
    this.authService.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() /*&& authResult.getRedirect()*/) {
          console.log(authResult);
          generalService.getGoogleUserData(authResult["response"]["access_token"]).subscribe( 
            (userData: any) => { 
              console.log(userData);
              this.router.navigate(['/']);
              /*
              generalService.createGoogleUser(userData).subscribe((res: any) =>{
                if(res.success){
                  //User sucessfully authenticated and registered in backend
                  this.router.navigateByUrl('localhost:4200/#/pages/sessions/dashboard');
                  //this.router.navigateByUrl(authResult.getRedirect());
                }
              });*/
             },
            (error: any) => { 
              //Handle google api error .. 
            }
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}