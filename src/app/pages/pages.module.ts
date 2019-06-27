import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SessionsModule } from './sessions/sessions.module';
import { GroupsModule } from './groups/groups.module';
import { UserProfileComponent } from './user/user-profile.component';
import { TableLinkComponent } from './extra-table-components/table-link.component';
import { TableLinkSessionComponent } from './extra-table-components/table-link-session.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  UserProfileComponent,
  TableLinkComponent,
  TableLinkSessionComponent,
];

const ENTRY_COMPONENTS = [
  TableLinkComponent,
  TableLinkSessionComponent,
];


@NgModule({
  imports: [
    //SessionsModule,
    //GroupsModule,
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class PagesModule {
}
