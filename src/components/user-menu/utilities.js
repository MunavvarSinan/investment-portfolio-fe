// assets
import { IconHistory, IconPackage } from '@tabler/icons';

// constant
const icons = {
  IconHistory: IconHistory,
  IconPackage: IconPackage,
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'transaction-history',
      title: 'Transaction History',
      type: 'item',
      url: '/users/transaction-history',
      icon: icons['IconHistory'],
      breadcrumbs: false,
    },
  ],
};
