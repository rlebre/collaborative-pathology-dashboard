import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './../pages/miscellaneous/not-found/not-found.component';

import { NbAuthComponent } from '@nebular/auth';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NbOAuth2LoginComponent } from './google-login/google-login.component';
import { OAuth2CallbackComponent } from './google-login/google-login-callback.component';


export const routes: Routes = [
    {
      path: '',
      component: NbAuthComponent,
      children: [
        {
          path: 'login',
          component: NgxLoginComponent,
        },
        {
          path: 'register',
          component: NgxRegisterComponent,
        },
        {
          path: 'google-login',
          component: NbOAuth2LoginComponent,
        },
        {
          path: 'google-callback',
          component: OAuth2CallbackComponent,
        },
        {
          path: '**',
          component: NotFoundComponent,
        }
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}