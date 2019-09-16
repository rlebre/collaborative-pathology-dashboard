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
  >
  </angular2-multiselect>
  `,
})
export class TableRoleEditorComponent extends DefaultEditor implements OnInit, AfterViewInit {

  role = {};

  selectedItems = [];
  dropdownSettings = {
    badgeShowLimit: 3,
    position: 'top',
    singleSelection: true,
  };
  dropdownList = [];

  aux_dict = {};

  constructor(protected generalService: GeneralService) {
    super();
  }

  ngOnInit(){
    this.role = this.cell.getValue();
    this.dropdownList = this.generalService.getRoles();
    this.aux_dict = {
      'moderator' : this.dropdownList[0],
      'guest' : this.dropdownList[1],
    };

    if(this.role == ""){
      this.role = "";
      this.cell.newValue = this.role;
    }

    switch(this.role){
      case 'Moderator':
        this.selectedItems.push(this.aux_dict['moderator']);
        break;
      case 'Guest':
        this.selectedItems.push(this.aux_dict['guest']);
        break;        
    }
  }

  ngAfterViewInit() {
    
  }

  onItemSelect(item:any){
    this.role = item['id'];
    this.cell.setValue(this.role);
  }

  onItemDeSelect(item:any){
    this.role = 'guest';
    this.cell.setValue(this.role);
  }
  
}