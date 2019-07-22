import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

//Components
import { AddUserWidgetComponent } from './add-user-widget/add-user-widget.component';

import { UsersTableWidgetComponent } from './users-table-widget/users-table-widget.component';
import { TablePermsEditorComponent } from './users-table-widget/table-perms-editor.component';
import { TablePermsViewComponent } from './users-table-widget/table-perms-view.component';
import { TableUsersEditorViewComponent } from './users-table-widget/table-users-editor-view.component';
import { TableUsersViewComponent } from './users-table-widget/table-users-view.component';
import { TableRoleViewComponent } from './users-table-widget/table-role-view.component';
import { TableRoleEditorComponent } from './users-table-widget/table-role-editor.component';

const COMPONENTS = [
    AddUserWidgetComponent,
    UsersTableWidgetComponent,
    TablePermsEditorComponent,
    TablePermsViewComponent,
    TableUsersEditorViewComponent,
    TableUsersViewComponent,
    TableRoleViewComponent,
    TableRoleEditorComponent,
];

const ENTRY_COMPONENTS = [
    TablePermsEditorComponent,
    TablePermsViewComponent,
    TableUsersEditorViewComponent,
    TableUsersViewComponent,  
    TableRoleViewComponent,
    TableRoleEditorComponent,  
];

const MODULES = [
    ThemeModule,
    Ng2SmartTableModule,
    AngularMultiSelectModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
    entryComponents: [...ENTRY_COMPONENTS],
})
export class WidgetsModule {
}
  