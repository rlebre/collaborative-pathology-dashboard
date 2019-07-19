import { Component, ViewChild, ElementRef, Input, OnInit ,AfterViewInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  template: `
  <angular2-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onSelect)="onItemSelect($event)" 
  (onDeSelect)="onItemDeSelect($event)"
  (onSelectAll)="onSelectAll($event)"
  (onDeSelectAll)="onDeSelectAll($event)"
  >
  </angular2-multiselect>
  `,
})
export class TablePermsEditorComponent extends DefaultEditor implements OnInit, AfterViewInit {

  /*@ViewChild('name') name: ElementRef;
  @ViewChild('url') url: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;*/
  perms = {};

  selectedItems = [];
  dropdownSettings = {
    //groupBy: "category",
    badgeShowLimit: 3,
    position: 'top',
  };
  dropdownList = [
    {"id":"movementPermission","itemName":"Movement", "category": "Image"},
    {"id":"flipPermission","itemName":"Flip", "category": "Image"},
    {"id":"annotationPermission","itemName":"Annotation", "category": "Image"},
    {"id":"adjustmentPermission","itemName":"Adjustment", "category": "Image"},
    {"id":"moderatorPermission","itemName":"Moderator", "category": "Moderation"},
  ];

  aux_dict = {
    'movementPermission' : this.dropdownList[0],
    'flipPermission' : this.dropdownList[1],
    'annotationPermission' : this.dropdownList[2],
    'adjustmentPermission' : this.dropdownList[3],
    'moderatorPermission' : this.dropdownList[4],
  };

  constructor() {
    super();
  }

  ngOnInit(){
    this.perms = this.cell.getValue();
    if(this.perms == ""){
      this.perms = {};
      this.cell.newValue = this.perms;
      console.log("adding new perms");
    }
    Object.keys(this.perms).forEach(function(key,index) {
      this.selectedItems.push(this.aux_dict[key]);
    }, this);
  }

  ngAfterViewInit() {
    
  }

  /* Incomplete, have to find a way to catch the edit event  */

  onItemSelect(item:any){
    this.perms[item['id']] = true;
  }
  onItemDeSelect(item:any){
    delete this.perms[item['id']];
  }
  onSelectAll(items: any){
    items.forEach(function (item, index) {
        this.perms[item['id']] = true;
      }, this);
  }
  onDeSelectAll(items: any){
      this.perms = {};
  }

}