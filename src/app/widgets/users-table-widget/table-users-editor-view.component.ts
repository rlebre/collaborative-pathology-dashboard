import { Component, Input, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
    styles: [ ],
    template: `
        <div> You cannot edit this information </div>
    `,
})
export class TableUsersEditorViewComponent extends DefaultEditor implements OnInit {

    ngOnInit() {

    }

}
