import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [`
    nb-user /deep/ {
        .info-container {
            @include nb-ltr(margin-left, 0.875rem);
            @include nb-rtl(margin-right, 0.875rem);
            }
        
            .user-name {
            font-family: nb-theme(font-secondary);
            font-weight: nb-theme(font-weight-bold);
            color: nb-theme(color-fg-heading);
            font-size: 1.25rem;
        
            @include nb-for-theme(cosmic) {
                font-weight: nb-theme(font-weight-bolder);
            }
            }
        
            .user-title {
            font-size: 0.875rem;
            font-weight: nb-theme(font-weight-light);
            }
        }
    `],
    template: `

        <div *ngIf="value else default" >
            <nb-user style="justify-content: space-around;" *ngIf="!value.anonymous else anonUser" [picture]="value.photo_url" [name]="value.email" [title]="value.firstname + ' ' + value.lastname" size="medium">
            </nb-user>
            <ng-template #anonUser>
                <nb-user style="justify-content: space-around;" nbTooltip="This user might not be registered" nbTooltipPlacement="top"
                badgeStatus="warning" badgeText="?" 
                [picture]="value.photo_url" [name]="value.email" [title]="value.firstname + ' ' + value.lastname" size="medium">
                </nb-user>
            </ng-template> 
        </div>

        <ng-template #default>
            <span>Details not available </span>
        </ng-template>
        
    `,
})
export class TableUsersViewComponent implements OnInit {

    @Input() value: any;

    ngOnInit() {
        console.log(this.value);
    }

}
