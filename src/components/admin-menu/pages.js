export const adminPages = {
  id: 'admin-pages',
  type: 'group',
  children: [
    {
      id: 'all-users',
      title: 'All Users',
      type: 'item',
      url: '/admin/allUsers',
      breadcrumbs: false,
    },
    {
      id: 'all-admins',
      title: 'All Admins',
      type: 'item',
      url: '/admin/allAdmins',
      breadcrumbs: false,
    },
  ],
};
