import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

import { AuthGuard } from '../../services/auth-guard.service';


const routes: Routes = [{
  path: '',
  component: GroupsComponent,
  children: [
    {
      path: 'create-group',
      canActivate: [AuthGuard],
      component: CreateGroupComponent,
    },
    {
      path: 'my-groups',
      canActivate: [AuthGuard],
      component: MyGroupsComponent,
    },
    {
      path: 'id/:id',
      canActivate: [AuthGuard],
      component: GroupDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {
}
