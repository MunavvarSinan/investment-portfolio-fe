// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
  IconDashboard: IconDashboard,
  IconDeviceAnalytics,
};
// const dashboard = {
//   if()
// }

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
  
  id: 'user-dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'User Dashboard',
      type: 'item',
      url: '/users/dashboard',
      icon: icons['IconDashboard'],
      breadcrumbs: false,
    },
  ],
};
