// assets
import { IconShare, IconMessageCircle } from '@tabler/icons';

// constant
const icons = {
  IconMessageCircle: IconMessageCircle,
  IconShare: IconShare,
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'invite-friend',
      title: 'Invite Friends',
      type: 'item',
      url: '/users/error',
      icon: icons['IconShare'],
      breadcrumbs: false,
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      url: '/users/error',
      icon: icons['IconMessageCircle'],
      breadcrumbs: false,
    },
  ],
};
