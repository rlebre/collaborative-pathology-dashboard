import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';


import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NbOAuth2LoginComponent } from './google-login/google-login.component';
import { OAuth2CallbackComponent } from './google-login/google-login-callback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    MiscellaneousModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    NbOAuth2LoginComponent,
    OAuth2CallbackComponent
  ],
  providers: [],
})
export class NgxAuthModule {
}
