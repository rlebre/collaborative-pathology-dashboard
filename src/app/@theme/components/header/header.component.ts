import { Component, Input, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbAuthResult, NbAuthService, NbAuthOAuth2Token } from '@nebular/auth';

import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { GeneralService } from '../../../services/general.service';

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

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private router: Router,
              private authService: NbAuthService,
              private generalService: GeneralService) {
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
        if (token && token.isValid()) {
          this.loggedIn = true;
          //this.user = JSON.parse(sessionStorage.getItem('user'));
        }
        else{
          this.loggedIn = false;
        }
      });

      //If user is logged in, token exists therefore we can get his name and picture
      if(this.loggedIn){
        this.user = this.authService.getToken()['value']['payload']['user'];
        console.log(this.user);
      }

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

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    this.generalService.logout().subscribe( 
      (res: any) => {
        if(res['success']){
          this.authService.logout('google').subscribe(
            (authResult: NbAuthResult) => {
              if(authResult.isSuccess){
                //Both the logout from the backend and frontend worked
                console.log("Successfully loged out.");
                this.router.navigate(['/main/menu']);
              }
            }
          );
        }
      }, 
      (err: any) => {
        //Logout failed in backend
        console.log("Logout failed in backend");
        console.log(err);
      }
    ); 
  }
}
