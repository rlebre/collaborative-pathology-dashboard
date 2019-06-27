import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [`
        .hotjoin{
            text-align: center;
            font-size: 2em; 
        }
    `],
    template: `

        <i *ngIf="value; else elseBlock" class="nb-checkmark hotjoin" [nbPopover]="icon" style="color: green;"></i>
        <ng-template #elseBlock>
            <i class="icon nb-close hotjoin" [nbPopover]="icon" style="color: red;"></i>
        </ng-template> 

    `,
})
export class TableHotjoinEditorComponent implements OnInit {

    @Input() value: any;

    ngOnInit() { 
    }

}
