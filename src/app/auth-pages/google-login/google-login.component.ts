import { Component, OnDestroy } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';


@Component({
    selector: 'nb-oauth2-login',
    templateUrl: './google-login.component.html',
  })
  export class NbOAuth2LoginComponent implements OnDestroy {
  
    alive = true;
    token: NbAuthOAuth2Token;

    constructor(private authService: NbAuthService) {
        this.authService.onTokenChange()
          .pipe(takeWhile(() => this.alive))
          .subscribe((token: NbAuthOAuth2Token) => {
            this.token = null;
            if (token && token.isValid()) {
              this.token = token;
            }
          });
    }
  
    login() {
      this.authService.authenticate('google')
        .pipe(takeWhile(() => this.alive))
        .subscribe((authResult: NbAuthResult) => {});
    }

    logout() {
        this.authService.logout('google')
          .pipe(takeWhile(() => this.alive))
          .subscribe((authResult: NbAuthResult) => {
          });
    }
  
    ngOnDestroy(): void {
      this.alive = false;
    }
  }