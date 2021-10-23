import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AdminAuth from '../utils/route-guard/AdminAuth';


const AdminDashborad = Loadable(
  lazy(() => import('../views/dashboard/admin-dashboard'))
);
const Users = Loadable(
  lazy(() => import('../views/pages/admin/getAllUsers'))
)
const AllAdmins = Loadable(
  lazy(() => import('../views/pages/admin/getAllAdmins'))
)

const AdminRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/admin/dashboard', '/admin/allUsers', '/admin/allAdmins']}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AdminAuth>
            <Route path="/admin/dashboard" component={AdminDashborad} />
            <Route path="/admin/allUsers" component={Users} />
            <Route path="/admin/allAdmins" component={AllAdmins} />
          </AdminAuth>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default AdminRoutes;
