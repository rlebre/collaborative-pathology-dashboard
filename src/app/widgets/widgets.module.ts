import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';


import { AddUserWidgetComponent } from './add-user-widget/add-user-widget.component';

const COMPONENTS = [
    AddUserWidgetComponent,
];

const MODULES = [
    ThemeModule,
]

@NgModule({
    imports: [...MODULES],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class WidgetsModule {
}
  