import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `

  <a routerLink="../id/{{name}}">{{name}}</a>

  `,
})
export class TableLinkComponent implements ViewCell, OnInit {

    @Input() value: any;
    @Input() rowData: any;

    name: string; 

    ngOnInit() { 
        this.name = this.value; 
    }

}