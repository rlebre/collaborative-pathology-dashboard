import { Component, ViewChild, ElementRef, Input, OnInit ,AfterViewInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { GeneralService } from '../../services/general.service';

@Component({
  template: `
  <angular2-multiselect *ngIf='dropdownList.length > 0'
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

  perms = {};

  selectedItems = [];
  dropdownSettings = {
    badgeShowLimit: 3,
    position: 'top',
  };

  dropdownList = [];

  aux_dict = {};

  constructor(protected generalService: GeneralService) {
    super();
  }

  ngOnInit(){
    this.dropdownList = this.generalService.getPerms();
    this.aux_dict = {
      'movementPermission' : this.dropdownList[0],
      'flipPermission' : this.dropdownList[1],
      'annotationPermission' : this.dropdownList[2],
      'adjustmentPermission' : this.dropdownList[3],
    };

    this.perms = this.cell.getValue();

    if(this.perms == ""){
      this.perms = {};
      this.cell.newValue = this.perms;
    }

    Object.keys(this.perms).forEach(function(key,index) {
      if(this.perms[key]){
        this.selectedItems.push(this.aux_dict[key]);
      }
    }, this);
  }

  ngAfterViewInit() {
    
  }

  /* Incomplete, have to find a way to catch the edit event  */

  onItemSelect(item:any){
    this.perms[item['id']] = true;
  }
  onItemDeSelect(item:any){
    this.perms[item['id']] = false;
  }
  onSelectAll(items: any){
    items.forEach(function (item, index) {
        this.perms[item['id']] = true;
      }, this);
  }
  onDeSelectAll(items: any){
    items.forEach(function (item, index) {
      this.perms[item['id']] = false;
    }, this);
  }

}