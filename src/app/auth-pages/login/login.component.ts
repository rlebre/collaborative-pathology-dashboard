import { Component, OnDestroy } from '@angular/core';
import { NbLoginComponent, NbAuthService } from '@nebular/auth';

import { NbAuthResult } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {

  alive = true;

  loginGoogle() {
    console.log("asda");
    this.service.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {});
  }

  ngOnDestroy(){
    this.alive = false;
  }

    
}