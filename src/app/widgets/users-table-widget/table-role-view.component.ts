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

        <div class="icon">
            <i *ngIf="value == 'Guest'" class="icon fas fa-user" style="color: rgb(208, 51, 240)" nbTooltip="Guest" nbTooltipPlacement="top"></i>
            <i *ngIf="value == 'Moderator'" class="icon fas fa-user-tie" style="color: green" nbTooltip="Moderator" nbTooltipPlacement="top"></i>
            <i *ngIf="value == 'Owner'" class="icon fas fa-user-check" style="color: red" nbTooltip="Owner" nbTooltipPlacement="top"></i>       
        </div>
        
    `,
})
export class TableRoleViewComponent implements OnInit {

    @Input() value: any;

    ngOnInit() {
    }

}
