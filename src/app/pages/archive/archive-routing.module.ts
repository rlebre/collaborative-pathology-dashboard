import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveComponent } from './archive.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { UploadCaseStudyComponent } from './upload-case-study/upload-case-study.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

import { AuthGuard } from '../../services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: ArchiveComponent,
  children: [
    {
      path: 'case-studies',
      canActivate: [AuthGuard],
      component: CaseStudiesComponent,
    },
    {
      path: 'upload-study',
      canActivate: [AuthGuard],
      component: UploadCaseStudyComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchiveRoutingModule {
}
