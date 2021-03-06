import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GroupsRoutingModule } from './groups-routing.module';
import { WidgetsModule } from '../../widgets/widgets.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

// components
import { GroupsComponent } from './groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { TableGroupsEditorComponent } from './my-groups/table-groups-editor.component';
import { DeleteDialogComponent } from './confirm-dialogs/delete-dialog.component';

// services
import { GroupsService } from '../../services/groups.service'; 
import { ToastrService } from '../../services/toastr.service';
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
  ToastrService,
];

const MODULES = [
  ThemeModule,
  MiscellaneousModule,
  Ng2SmartTableModule,
  GroupsRoutingModule,
  ToasterModule.forChild(),
  NbDialogModule.forChild(),
  WidgetsModule,
  AngularMultiSelectModule,
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
