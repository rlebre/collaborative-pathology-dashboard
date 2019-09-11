import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [`
        .icon {
            display: inline-block;
            font-size: 1.5rem;
            margin-right: 0.5em; 
            margin-left: 0.5em;
        }
        .icon:hover {
            opacity: 0.8;
            cursor: pointer !important;
        }
          
    `],
    template: `

        <span *ngIf="no_perms else perms" style="color: red;">No Permissions Granted</span>
        <ng-template #perms>
            <div class="icon">
                <i *ngIf="value.movementPermission" class="icon fas fa-arrows-alt" style="color: green" nbTooltip="Has Movement Permission" nbTooltipPlacement="top"></i>
                <i *ngIf="value.flipPermission" class="icon fas fa-undo" style="color: rgb(0, 119, 128)" nbTooltip="Has Flip Permission" nbTooltipPlacement="top"></i>
                <i *ngIf="value.annotationPermission" class="icon fas fa-pencil-alt" style="color: rgb(0, 23, 128)" nbTooltip="Has Annotation Permission" nbTooltipPlacement="top"></i>
                <i *ngIf="value.adjustmentPermission" class="icon fas fa-adjust" style="color: rgb(253, 225, 97)" nbTooltip="Has Adjustment Permission" nbTooltipPlacement="top"></i>
            </div>
        </ng-template> 

    `,
})
export class TablePermsViewComponent implements OnInit {

    @Input() value: any;

    no_perms: boolean = true;

    ngOnInit() {

        //Iterate through the perms object to find if user has any perms
        Object.keys(this.value).forEach(key => {
            let value = this.value[key];
            if(value)
                this.no_perms = false;
            });
    }

}
