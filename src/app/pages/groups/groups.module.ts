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

// services
import { CreateGroupService } from '../../services/create-group.service'; 

const COMPONENTS = [
  GroupsComponent,
  CreateGroupComponent, 
  MyGroupsComponent, 
  GroupDetailsComponent,
  TableGroupsEditorComponent,
];

const SERVICES = [
  CreateGroupService, 
];

const MODULES = [
  ThemeModule,
  Ng2SmartTableModule,
  GroupsRoutingModule,
  ToasterModule.forRoot(),
  WidgetsModule
];

const ENTRYCOMPONENTS = [
  TableGroupsEditorComponent, 
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
