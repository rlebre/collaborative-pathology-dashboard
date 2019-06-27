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
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
    },
    
    {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
    },

    /*
    {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
    },

    {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
    },
    
    {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
    },
    */
    
    {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
    },
    
    {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
    },
    
    /*
    {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    },
    */
    
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
