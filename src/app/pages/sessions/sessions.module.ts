import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { SessionsRoutingModule } from './sessions-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';
import { WidgetsModule } from '../../widgets/widgets.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NbDialogModule } from '@nebular/theme';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


// components
import { SessionsComponent } from './sessions.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { TableImageEditorComponent } from './create-session/table-image-editor.component';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { TableHotjoinEditorComponent } from './dashboard/table-hotjoin-editor.component';
import { TableUrlsEditorComponent } from './dashboard/table-urls-editor.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

import { TravelDialogComponent } from './confirm-dialogs/travel-dialog.component';
import { DeleteDialogComponent } from './confirm-dialogs/delete-dialog.component';

// service
import { SessionsService } from '../../services/sessions.service';
import { ToastrService } from '../../services/toastr.service';

const COMPONENTS = [
  SessionsComponent,
  CreateSessionComponent, 
  DashboardComponent, 
  TableImageEditorComponent,
  TableHotjoinEditorComponent,
  TableUrlsEditorComponent,
  SessionDetailsComponent,
  TravelDialogComponent,
  DeleteDialogComponent
];

const ENTRYCOMPONENTS = [
  TableImageEditorComponent,
  TableHotjoinEditorComponent,
  TableUrlsEditorComponent,
  TravelDialogComponent,
  DeleteDialogComponent,
]

const SERVICES = [
  SessionsService,
  ToastrService
];

const MODULES = [
  ThemeModule,
  SessionsRoutingModule,
  Ng2SmartTableModule,
  ToasterModule.forRoot(),
  WidgetsModule,
  CKEditorModule,
  NgMultiSelectDropDownModule.forRoot(),
  AngularMultiSelectModule, 
  FormsModule,
  NbDialogModule.forChild(),OwlDateTimeModule,
  OwlNativeDateTimeModule,
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
export class SessionsModule { }
