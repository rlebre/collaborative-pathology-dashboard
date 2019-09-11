import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

// components
import { ArchiveComponent } from './archive.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { UploadCaseStudyComponent } from './upload-case-study/upload-case-study.component';

// services
import { ToastrService } from '../../services/toastr.service';
import { NbDialogModule } from '@nebular/theme';

const COMPONENTS = [
  ArchiveComponent,
  CaseStudiesComponent,
  UploadCaseStudyComponent
];

const SERVICES = [
  ToastrService,
];

const MODULES = [
  ThemeModule,
  MiscellaneousModule,
  ToasterModule.forChild(),
  NbDialogModule.forChild(),
  AngularMultiSelectModule,
];

const ENTRYCOMPONENTS = [
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
