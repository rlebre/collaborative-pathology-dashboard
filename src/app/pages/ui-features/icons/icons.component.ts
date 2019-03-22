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
      'ion-md-add', 'ion-md-add-circle', 'ion-md-add-circle-outline', 'ion-md-airplane', 'ion-md-alarm', 'ion-md-albums', 'ion-md-alert', 'ion-md-american-football', 'ion-md-analytics', 'ion-md-aperture', 'ion-md-apps', 'ion-md-appstore', 'ion-md-archive', 'ion-md-arrow-back', 'ion-md-arrow-down', 'ion-md-arrow-dropdown', 'ion-md-arrow-dropdown-circle', 'ion-md-arrow-dropleft', 'ion-md-arrow-dropleft-circle', 'ion-md-arrow-dropright', 'ion-md-arrow-dropright-circle', 'ion-md-arrow-dropup', 'ion-md-arrow-dropup-circle', 'ion-md-arrow-forward', 'ion-md-arrow-round-back', 'ion-md-arrow-round-down', 'ion-md-arrow-round-forward', 'ion-md-arrow-round-up', 'ion-md-arrow-up', 'ion-md-at', 'ion-md-attach', 'ion-md-backspace', 'ion-md-barcode', 'ion-md-baseball', 'ion-md-basket', 'ion-md-basketball', 'ion-md-battery-charging', 'ion-md-battery-dead', 'ion-md-battery-full', 'ion-md-beaker', 'ion-md-bed', 'ion-md-beer', 'ion-md-bicycle', 'ion-md-bluetooth', 'ion-md-boat', 'ion-md-body', 'ion-md-bonfire', 'ion-md-book', 'ion-md-bookmark', 'ion-md-bookmarks', 'ion-md-bowtie', 'ion-md-briefcase', 'ion-md-browsers', 'ion-md-brush', 'ion-md-bug', 'ion-md-build', 'ion-md-bulb', 'ion-md-bus', 'ion-md-business', 'ion-md-cafe', 'ion-md-calculator', 'ion-md-calendar', 'ion-md-call', 'ion-md-camera', 'ion-md-car', 'ion-md-card', 'ion-md-cart', 'ion-md-cash', 'ion-md-cellular', 'ion-md-chatboxes', 'ion-md-chatbubbles', 'ion-md-checkbox', 'ion-md-checkbox-outline', 'ion-md-checkmark', 'ion-md-checkmark-circle', 'ion-md-checkmark-circle-outline', 'ion-md-clipboard', 'ion-md-clock', 'ion-md-close', 'ion-md-close-circle', 'ion-md-close-circle-outline', 'ion-md-cloud', 'ion-md-cloud-circle', 'ion-md-cloud-done', 'ion-md-cloud-download', 'ion-md-cloud-outline', 'ion-md-cloud-upload', 'ion-md-cloudy', 'ion-md-cloudy-night', 'ion-md-code', 'ion-md-code-download', 'ion-md-code-working', 'ion-md-cog', 'ion-md-color-fill', 'ion-md-color-filter', 'ion-md-color-palette', 'ion-md-color-wand', 'ion-md-compass', 'ion-md-construct', 'ion-md-contact', 'ion-md-contacts', 'ion-md-contract', 'ion-md-contrast', 'ion-md-copy', 'ion-md-create', 'ion-md-crop', 'ion-md-cube', 'ion-md-cut', 'ion-md-desktop', 'ion-md-disc', 'ion-md-document', 'ion-md-done-all', 'ion-md-download', 'ion-md-easel', 'ion-md-egg', 'ion-md-exit', 'ion-md-expand', 'ion-md-eye', 'ion-md-eye-off', 'ion-md-fastforward', 'ion-md-female', 'ion-md-filing', 'ion-md-film', 'ion-md-finger-print', 'ion-md-fitness', 'ion-md-flag', 'ion-md-flame', 'ion-md-flash', 'ion-md-flash-off', 'ion-md-flashlight', 'ion-md-flask', 'ion-md-flower', 'ion-md-folder', 'ion-md-folder-open', 'ion-md-football', 'ion-md-funnel', 'ion-md-gift', 'ion-md-git-branch', 'ion-md-git-commit', 'ion-md-git-compare', 'ion-md-git-merge', 'ion-md-git-network', 'ion-md-git-pull-request', 'ion-md-glasses', 'ion-md-globe', 'ion-md-grid', 'ion-md-hammer', 'ion-md-hand', 'ion-md-happy', 'ion-md-headset', 'ion-md-heart', 'ion-md-heart-dislike', 'ion-md-heart-empty', 'ion-md-heart-half', 'ion-md-help', 'ion-md-help-buoy', 'ion-md-help-circle', 'ion-md-help-circle-outline', 'ion-md-home', 'ion-md-hourglass',
      // 'ion-md-ice-cream', 'ion-md-image', 'ion-md-images', 'ion-md-infinite', 'ion-md-information', 'ion-md-information-circle', 'ion-md-information-circle-outline', 'ion-md-jet', 'ion-md-journal', 'ion-md-key', 'ion-md-keypad', 'ion-md-laptop', 'ion-md-leaf', 'ion-md-link', 'ion-md-list', 'ion-md-list-box', 'ion-md-locate', 'ion-md-lock', 'ion-md-log-in', 'ion-md-log-out', 'ion-md-magnet', 'ion-md-mail', 'ion-md-mail-open', 'ion-md-mail-unread', 'ion-md-male', 'ion-md-man', 'ion-md-map', 'ion-md-medal', 'ion-md-medical', 'ion-md-medkit', 'ion-md-megaphone', 'ion-md-menu', 'ion-md-mic', 'ion-md-mic-off', 'ion-md-microphone', 'ion-md-moon', 'ion-md-more', 'ion-md-move', 'ion-md-musical-note', 'ion-md-musical-notes', 'ion-md-navigate', 'ion-md-notifications', 'ion-md-notifications-off', 'ion-md-notifications-outline', 'ion-md-nuclear', 'ion-md-nutrition', 'ion-md-open', 'ion-md-options', 'ion-md-outlet', 'ion-md-paper', 'ion-md-paper-plane', 'ion-md-partly-sunny', 'ion-md-pause', 'ion-md-paw', 'ion-md-people', 'ion-md-person', 'ion-md-person-add', 'ion-md-phone-landscape', 'ion-md-phone-portrait', 'ion-md-photos', 'ion-md-pie', 'ion-md-pin', 'ion-md-pint', 'ion-md-pizza', 'ion-md-planet', 'ion-md-play', 'ion-md-play-circle', 'ion-md-podium', 'ion-md-power', 'ion-md-pricetag', 'ion-md-pricetags', 'ion-md-print', 'ion-md-pulse', 'ion-md-qr-scanner', 'ion-md-quote', 'ion-md-radio', 'ion-md-radio-button-off', 'ion-md-radio-button-on', 'ion-md-rainy', 'ion-md-recording', 'ion-md-redo', 'ion-md-refresh', 'ion-md-refresh-circle', 'ion-md-remove', 'ion-md-remove-circle', 'ion-md-remove-circle-outline', 'ion-md-reorder', 'ion-md-repeat', 'ion-md-resize', 'ion-md-restaurant', 'ion-md-return-left', 'ion-md-return-right', 'ion-md-reverse-camera', 'ion-md-rewind', 'ion-md-ribbon', 'ion-md-rocket', 'ion-md-rose', 'ion-md-sad', 'ion-md-save', 'ion-md-school', 'ion-md-search', 'ion-md-send', 'ion-md-settings', 'ion-md-share', 'ion-md-share-alt', 'ion-md-shirt', 'ion-md-shuffle', 'ion-md-skip-backward', 'ion-md-skip-forward', 'ion-md-snow', 'ion-md-speedometer', 'ion-md-square', 'ion-md-square-outline', 'ion-md-star', 'ion-md-star-half', 'ion-md-star-outline', 'ion-md-stats', 'ion-md-stopwatch', 'ion-md-subway', 'ion-md-sunny', 'ion-md-swap', 'ion-md-switch', 'ion-md-sync', 'ion-md-tablet-landscape', 'ion-md-tablet-portrait', 'ion-md-tennisball', 'ion-md-text', 'ion-md-thermometer', 'ion-md-thumbs-down', 'ion-md-thumbs-up', 'ion-md-thunderstorm', 'ion-md-time', 'ion-md-timer', 'ion-md-today', 'ion-md-train', 'ion-md-transgender', 'ion-md-trash', 'ion-md-trending-down', 'ion-md-trending-up', 'ion-md-trophy', 'ion-md-tv', 'ion-md-umbrella', 'ion-md-undo', 'ion-md-unlock', 'ion-md-videocam', 'ion-md-volume-high', 'ion-md-volume-low', 'ion-md-volume-mute', 'ion-md-volume-off', 'ion-md-walk', 'ion-md-wallet', 'ion-md-warning', 'ion-md-watch', 'ion-md-water', 'ion-md-wifi', 'ion-md-wine', 'ion-md-woman',
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
