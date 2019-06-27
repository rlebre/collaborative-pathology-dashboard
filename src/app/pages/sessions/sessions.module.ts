import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { SessionsRoutingModule } from './sessions-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';
import { WidgetsModule } from '../../widgets/widgets.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// components
import { SessionsComponent } from './sessions.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { TableImageEditorComponent } from './create-session/table-image-editor.component';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { TableHotjoinEditorComponent } from './dashboard/table-hotjoin-editor.component';
import { TableUrlsEditorComponent } from './dashboard/table-urls-editor.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

// service

const COMPONENTS = [
  SessionsComponent,
  CreateSessionComponent, 
  DashboardComponent, 
  TableImageEditorComponent,
  TableHotjoinEditorComponent,
  TableUrlsEditorComponent,
  SessionDetailsComponent,
];

const ENTRYCOMPONENTS = [
  TableImageEditorComponent,
  TableHotjoinEditorComponent,
  TableUrlsEditorComponent,
]

const SERVICES = [
];

const MODULES = [
  ThemeModule,
  SessionsRoutingModule,
  Ng2SmartTableModule,
  ToasterModule.forRoot(),
  WidgetsModule,
  CKEditorModule,
  NgMultiSelectDropDownModule.forRoot(),
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
