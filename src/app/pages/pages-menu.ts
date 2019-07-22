import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Sessions',
    icon: 'fas fa-users',
    children: [
      {
        title: 'Overview',
        link: '/pages/sessions/dashboard',
      },
      {
        title: 'Create Session',
        link: '/pages/sessions/create-session',
      },
    ],
    home: true, 
  },
  {
    title: 'Groups',
    icon: 'fas fa-users-cog',
    children: [
      {
        title: 'Create Group',
        link: '/pages/groups/create-group',
      },
      {
        title: 'My Groups',
        link: '/pages/groups/my-groups',
      },
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
];
