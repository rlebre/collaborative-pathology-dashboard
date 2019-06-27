import { Component, Input, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService, NB_WINDOW } from '@nebular/theme';
import { NbAuthResult, NbAuthService, NbAuthOAuth2Token } from '@nebular/auth';

import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  loggedIn: boolean; 
  token: NbAuthOAuth2Token;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private router: Router,
              private authService: NbAuthService,
              @Inject(NB_WINDOW) private window) {
  }


  ngOnInit() {

    this.loggedIn = false;

    /*
    this.authService.onAuthenticationChange()
      .pipe(
        tap(authenticated => {
          this.loggedIn = authenticated;
          console.log("ashdbasjdbjhasdbsa");
          console.log(this.loggedIn); 
        }),
      );
      */

    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2Token) => {
        this.token = null;
        if (token && token.isValid()) {
          this.token = token;
          this.loggedIn = true;
        }
        else{
          this.loggedIn = false;
        }
        
      });

    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if(title == "Profile"){
          this.router.navigate(['/pages/user-profile']);
        }
        else{
          this.logout();
        }
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    this.authService.logout('google')
      .subscribe((authResult: NbAuthResult) => {
        console.log(authResult);
        if(authResult.isSuccess){
          console.log("Successfully loged out.");
          this.router.navigate(['/pages/main-menu']);
        }
      });
  }

}
