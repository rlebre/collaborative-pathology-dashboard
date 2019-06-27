import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `

    <nb-accordion>
      <nb-accordion-item #item>
        <nb-accordion-item-header>
            {{nMembers}} Members
        </nb-accordion-item-header>
        <nb-accordion-item-body>
            <div *ngFor="let member of members;">
                <p>{{member.email}}</p>
            </div>
        </nb-accordion-item-body>
      </nb-accordion-item>
    <nb-accordion>

  `,
})
export class TableGroupsEditorComponent implements ViewCell, OnInit {

    nMembers: number; 
    members: any; 

    @Input() value: any;
    @Input() rowData: any;

    @ViewChild('item') accordion;

    ngOnInit() { 
        this.nMembers = this.value.length;
        this.members = this.value; 
    }

    toggle() {
        this.accordion.toggle();
    }

}
