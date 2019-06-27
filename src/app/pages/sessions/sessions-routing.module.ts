import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsComponent } from './sessions.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

import { AuthGuard } from '../../services/auth-guard.service';

const routes: Routes = [
  {
  path: '',
  component: SessionsComponent,
  children: [
    {
      path: 'create-session',
      canActivate: [AuthGuard],
      component: CreateSessionComponent,
    },
    {
      path: 'dashboard',
      canActivate: [AuthGuard],
      component: DashboardComponent,
    },
    {
      path: '', 
      canActivate: [AuthGuard],
      component: DashboardComponent,
      pathMatch: 'full'
    },
    {
      path: 'sessionDetails/:sessionHash',
      canActivate: [AuthGuard],
      component: SessionDetailsComponent,
    },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {
}

export const routedComponents = [
  CreateSessionComponent,
  DashboardComponent,
];
