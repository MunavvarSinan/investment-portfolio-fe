// assets
import {
  IconHelp,
  IconShare,
  IconAd2,
  IconMessageCircle,
} from '@tabler/icons';

// constant
const icons = {
  IconAd2: IconAd2,
  IconMessageCircle: IconMessageCircle,
  IconHelp: IconHelp,
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
      // url: '/utils/util-typography',
      icon: icons['IconShare'],
      breadcrumbs: false,
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      // url: '/sample-page',
      icon: icons['IconMessageCircle'],
      breadcrumbs: false,
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: '/sample-page',
      breadcrumbs: false,
      icon: icons['IconAd2'],
      // external: true,
      // target: true
    },
  ],
};
