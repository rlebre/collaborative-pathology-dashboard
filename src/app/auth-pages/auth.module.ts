import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';

import { MiscellaneousModule } from './../pages/miscellaneous/miscellaneous.module';

import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NbOAuth2LoginComponent } from './google-login/google-login.component';
import { OAuth2CallbackComponent } from './google-login/google-login-callback.component';

import { GeneralService } from './../services/general.service';

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
    MiscellaneousModule,

    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    NbOAuth2LoginComponent,
    OAuth2CallbackComponent
  ],
  providers: [GeneralService],
})
export class NgxAuthModule {
}
