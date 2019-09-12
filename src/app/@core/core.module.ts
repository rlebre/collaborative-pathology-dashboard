import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
} from './utils';
import { UserData } from './data/users';
import { SmartTableData } from './data/smart-table';

import { UserService } from './mock/users.service';
import { SmartTableService } from './mock/smart-table.service';
import { MockDataModule } from './mock/mock-data.module';

const socialLinks = [
  /*{
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  },*/
  {
    link: '../google-login',
    target: '_blank',
    icon: 'socicon-google',
    click: 'loginGoogle()',
  },
];



const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: SmartTableData, useClass: SmartTableService },
];

const GOOGLE_CLIENT_ID = "664542270710-reqok1ddbdttf4t92viecuoa5qjdng6l.apps.googleusercontent.com"; 
const GOOGLE_CLIENT_SECRET = "JEKt-guF-R2kIeMyaCWqMbcq"; 

//const url_callback: string = "http://demo.dicoogle.com/pathobox/auth/google-callback";
const url_callback: string = "http://mednat.ieeta.pt:8296/auth/google-callback";

//const backend_url: string = "http://demo.dicoogle.com/pathobox-api";
const backend_url: string = "http://mednat.ieeta.pt:8297";

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: backend_url,
        token: {
          class: NbAuthJWTToken,
          key: 'token',
        },
        login: {
          endpoint: '/auth/local',
          method: 'post',
          redirect: {
            success: '/', // welcome page path
            failure: null, // stay on the same page
          },
        },
        register: {
          endpoint: '/registuser',
          method: 'post',
          redirect: {
            success: '/', // welcome page path
            failure: null, // stay on the same page
          },
        },
      }),
      NbOAuth2AuthStrategy.setup({
        name: 'google',
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        authorize: {
          endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
          responseType: NbOAuth2ResponseType.TOKEN,
          scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login',
          redirectUri: url_callback,
        },
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
