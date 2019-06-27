import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu.component';
import { MainMenuPageComponent } from './menu-page/main-menu-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';


const routes: Routes = [{
  path: '',
  component: MainMenuComponent,
  children: [
    {
      path: 'menu',
      component: MainMenuPageComponent,
    },
    {
      path: 'terms',
      component: TermsPageComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuRoutingModule {
}
