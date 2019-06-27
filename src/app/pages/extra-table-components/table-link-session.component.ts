import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `

  <a routerLink="../sessionDetails/{{hash}}">{{name}}</a>

  `,
})
export class TableLinkSessionComponent implements ViewCell, OnInit {

    @Input() value: any;
    @Input() rowData: any;

    name: string; 
    hash: number; 

    ngOnInit() { 
        console.log(this.rowData);
        this.name = this.value; 
        this.hash = this.rowData.sessionHash;
    }

}