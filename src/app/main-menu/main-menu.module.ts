import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';

import { MainMenuComponent } from './main-menu.component';
import { MainMenuPageComponent } from './menu-page/main-menu-page.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import { TermsPageComponent } from './terms-page/terms-page.component';

// components
// services
const COMPONENTS = [
    MainMenuComponent,
    MainMenuPageComponent,
    TermsPageComponent
];

const SERVICES = [
];

const MODULES = [
  ThemeModule,
  MiscellaneousModule,
  MainMenuRoutingModule,
];

const ENTRYCOMPONENTS = [ 
]; 

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRYCOMPONENTS,
  ],
})
export class MainMenuModule { }
