import { ChangeDetectionStrategy, Component } from '@angular/core';
import { icons } from 'eva-icons';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {

  evaIcons = [];

  constructor() {
    this.evaIcons = Object.keys(icons).filter(icon => icon.indexOf('outline') === -1);
  }

  icons = {

    nebular: ['nb-alert', 'nb-angle-double-left', 'nb-angle-double-right',
      'nb-arrow-down', 'nb-arrow-dropdown', 'nb-arrow-dropleft',
      'nb-arrow-dropright', 'nb-arrow-dropup', 'nb-arrow-left', 'nb-arrow-retweet', 'nb-arrow-right',
      'nb-arrow-thin-down', 'nb-arrow-thin-left', 'nb-arrow-thin-right', 'nb-arrow-thin-up',
      'nb-arrow-up', 'nb-audio', 'nb-bar-chart', 'nb-checkmark', 'nb-chevron-down',
      'nb-chevron-down-outline', 'nb-chevron-left', 'nb-chevron-left-outline', 'nb-chevron-right',
      'nb-chevron-right-outline', 'nb-chevron-up', 'nb-chevron-up-outline', 'nb-close',
      'nb-close-circled', 'nb-cloudy', 'nb-coffee-maker', 'nb-compose', 'nb-edit', 'nb-email',
      'nb-flame-circled', 'nb-gear', 'nb-grid-a', 'nb-grid-a-outline', 'nb-grid-b', 'nb-grid-b-outline',
      'nb-heart', 'nb-home', 'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column',
      'nb-layout-sidebar-left', 'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb',
      'nb-list', 'nb-location', 'nb-locked', 'nb-loop', 'nb-loop-circled', 'nb-menu', 'nb-notifications',
      'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-pause-outline', 'nb-person', 'nb-phone',
      'nb-play', 'nb-play-outline', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-power-circled',
      'nb-rainy', 'nb-roller-shades', 'nb-search', 'nb-shuffle', 'nb-skip-backward',
      'nb-skip-backward-outline', 'nb-skip-forward', 'nb-skip-forward-outline', 'nb-snowy-circled',
      'nb-square', 'nb-square-outline', 'nb-star', 'nb-sunny', 'nb-sunny-circled', 'nb-tables', 'nb-title',
      'nb-trash', 'nb-volume-high', 'nb-volume-mute', 'nb-drop', 'nb-drops', 'nb-info', 'nb-expand', 'nb-collapse',
      'nb-e-commerce', 'nb-danger', 'nb-checkmark-circle', 'nb-help'],

    ionicons: [
      'ion-md-add', 'ion-md-add-circle', 'ion-md-add-circle-outline', 'ion-md-airplane', 'ion-md-alarm',
      'ion-md-albums', 'ion-md-alert', 'ion-md-american-football', 'ion-md-analytics', 'ion-md-aperture', 
      'ion-md-apps', 'ion-md-appstore', 'ion-md-archive', 'ion-md-arrow-back', 'ion-md-arrow-down', 
      'ion-md-arrow-dropdown', 'ion-md-arrow-dropdown-circle', 'ion-md-arrow-dropleft', 
      'ion-md-arrow-dropleft-circle', 'ion-md-arrow-dropright', 'ion-md-arrow-dropright-circle',
      'ion-md-arrow-dropup', 'ion-md-arrow-dropup-circle', 'ion-md-arrow-forward', 'ion-md-arrow-round-back', 
      'ion-md-arrow-round-down', 'ion-md-arrow-round-forward', 'ion-md-arrow-round-up', 'ion-md-arrow-up', 
      'ion-md-at', 'ion-md-attach', 'ion-md-backspace', 'ion-md-barcode', 'ion-md-baseball', 'ion-md-basket',
      'ion-md-basketball', 'ion-md-battery-charging', 'ion-md-battery-dead', 'ion-md-battery-full', 
      'ion-md-beaker', 'ion-md-bed', 'ion-md-beer', 'ion-md-bicycle', 'ion-md-bluetooth', 'ion-md-boat',
      'ion-md-body', 'ion-md-bonfire', 'ion-md-book', 'ion-md-bookmark', 'ion-md-bookmarks', 
      'ion-md-bowtie', 'ion-md-briefcase', 'ion-md-browsers', 'ion-md-brush', 'ion-md-bug', 
      'ion-md-build', 'ion-md-bulb', 'ion-md-bus', 'ion-md-business', 'ion-md-cafe', 
      'ion-md-calculator', 'ion-md-calendar', 'ion-md-call', 'ion-md-camera', 'ion-md-car', 
      'ion-md-card', 'ion-md-cart', 'ion-md-cash', 'ion-md-cellular', 'ion-md-chatboxes', 
      'ion-md-chatbubbles', 'ion-md-checkbox', 'ion-md-checkbox-outline', 'ion-md-checkmark',
      'ion-md-checkmark-circle', 'ion-md-checkmark-circle-outline', 'ion-md-clipboard', 'ion-md-clock',
      'ion-md-close', 'ion-md-close-circle', 'ion-md-close-circle-outline', 'ion-md-cloud',
    ],

    fontAwesome: [
      'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-chart-area', 'fa fa-arrows-alt', 'fa fa-arrows-alt-h',
      'fa fa-arrows-alt-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-car', 'fa fa-ban', 'fa fa-university',
      'fa fa-chart-bar', 'far fa-chart-bar', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
      'fa fa-bell', 'far fa-bell', 'fa fa-bell-slash', 'far fa-bell-slash', 'fa fa-bicycle', 'fa fa-binoculars',
      'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'far fa-bookmark',
      'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'far fa-building', 'fa fa-bullhorn',
    ],
  };

}
