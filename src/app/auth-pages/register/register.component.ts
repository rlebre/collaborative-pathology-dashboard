import { Component } from '@angular/core';
import { NbRegisterComponent, NbAuthResult, NbAuthToken } from '@nebular/auth';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {

  user: any = {};
  token: NbAuthToken;

  registerUser(){

    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.register('email', this.user).subscribe((result: NbAuthResult) => {
      let canRedirect: boolean = true;
      this.submitted = false;
      this.token = result.getToken();
      if (result.isSuccess()) {
        let resp = result.getResponse();
        //The request had no issues but the backend pointed somemething wrong with the data
        if(!resp['body']['success']){
          this.errors.push(resp['body']['error']);
          canRedirect = false;
        }
        else{
          this.messages = result.getMessages();
        }
      } else {
        this.errors = result.getErrors();
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

    
}