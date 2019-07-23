import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
  NotFoundComponent,
]

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ...COMPONENTS
  ],
})
export class MiscellaneousModule { }
