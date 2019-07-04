import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GroupsRoutingModule } from './groups-routing.module';
import { WidgetsModule } from '../../widgets/widgets.module';

// components
import { GroupsComponent } from './groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { TableGroupsEditorComponent } from './my-groups/table-groups-editor.component';
import { DeleteDialogComponent } from './confirm-dialogs/delete-dialog.component';

// services
import { GroupsService } from '../../services/groups.service'; 
import { NbDialogModule } from '@nebular/theme';

const COMPONENTS = [
  GroupsComponent,
  CreateGroupComponent, 
  MyGroupsComponent, 
  GroupDetailsComponent,
  TableGroupsEditorComponent,
  DeleteDialogComponent
];

const SERVICES = [
  GroupsService, 
];

const MODULES = [
  ThemeModule,
  Ng2SmartTableModule,
  GroupsRoutingModule,
  ToasterModule.forChild(),
  NbDialogModule.forChild(),
  WidgetsModule,
];

const ENTRYCOMPONENTS = [
  TableGroupsEditorComponent, 
  DeleteDialogComponent
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
export class GroupsModule { }
