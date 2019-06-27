import { Component } from '@angular/core';

@Component({
  selector: 'ngx-components',
  template: `
    <ngx-sample2-layout>
      <router-outlet></router-outlet>
    </ngx-sample2-layout>
  `,
})
export class MainMenuComponent {
}
