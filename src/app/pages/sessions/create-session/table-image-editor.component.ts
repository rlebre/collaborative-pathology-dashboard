import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [``],
    template: `
        <img [src]="value" alt="Study Image" height="50" width="50"> 
    `,
})
export class TableImageEditorComponent implements OnInit {

    @Input() value: any;

    ngOnInit() { 
    }

}
