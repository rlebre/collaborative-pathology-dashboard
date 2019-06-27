import { Component, Input, OnInit } from '@angular/core';

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

    ngOnInit() { 
    }

    joinSession(){
        location.href = "http://www.youtube.com";
        console.log(this.value[0]); 
    }

    replaySession(){
        console.log(this.value[1]); 
        console.log("aaaa");
        //location.href = "http://www.youtube.com";
    }


}
