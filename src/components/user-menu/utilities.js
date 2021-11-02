// assets
import { IconHistory, IconCurrencyDollar, IconUser } from '@tabler/icons';

// constant
const icons = {
  IconHistory: IconHistory,
  IconUser: IconUser,
  IconCurrencyDollar: IconCurrencyDollar
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
  id: 'utilities',
  // title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'add-or-withdraw',
      title: 'Add/Withdraw',
      type: 'item',
      url: '/users/addMoney',
      icon: icons['IconCurrencyDollar'],
      breadcrumbs: false,
    },
    {
      id: 'transaction-history',
      title: 'Transaction History',
      type: 'item',
      url: '/users/transaction-history',
      icon: icons['IconHistory'],
      breadcrumbs: false,
    },
    {
      id: 'profile',
      title: 'Profile',
      type: 'item',
      url: '/users/profile',
      icon: icons['IconUser'],
      breadcrumbs: false,
    },
  ],
};
