import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styles: [`
        .icon:hover {
            opacity: 0.8;
            cursor: pointer;
        }
    `],
  template: `

    <nb-actions size="medium">   
        <nb-action class="icon" (click)="joinSession()" nbTooltip="Join Session" nbTooltipPlacement="top">
            <i class="fa fa-sign-in-alt" style="color: #012051;"></i>
        </nb-action> 
        <nb-action class="icon" (click)="replaySession()" nbTooltip="Replay Session" nbTooltipPlacement="top">
            <i class="fa fa-play-circle" style="color: #01500a;"></i>
        </nb-action> 
    </nb-actions>

  `,
})
export class TableUrlsEditorComponent implements OnInit {


    @Input() value: any;

    constructor(private router: Router){

    }

    ngOnInit() { 
        console.log(this.value);
    }

    joinSession(){
        window.location.href= this.value[0];
    }

    replaySession(){
        window.location.href= this.value[1];
    }


}
