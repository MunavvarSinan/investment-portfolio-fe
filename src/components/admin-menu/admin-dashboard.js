import { IconDashboard } from '@tabler/icons';

const icons = {
  IconDashboard: IconDashboard,
};

export const adminDashboard = {
  id: 'admin-dashboard',
  type: 'group',
  children: [
    {
      id: 'admin',
      title: 'Admin Dashboard',
      type: 'item',
      url: '/admin/dashboard',
      icon: icons['IconDashboard'],
      breadcrumbs: false,
    },
  ],
};
