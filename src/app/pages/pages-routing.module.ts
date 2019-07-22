import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { UserProfileComponent } from './user/user-profile.component';

import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'sessions',
      canActivate: [AuthGuard],
      loadChildren: './sessions/sessions.module#SessionsModule',
    },
    
    {
      path: 'groups',
      canActivate: [AuthGuard],
      loadChildren: './groups/groups.module#GroupsModule',
    },

    {
      path: 'user-profile',
      canActivate: [AuthGuard],
      component: UserProfileComponent,
    },

    {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
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
export class PagesRoutingModule {
}
