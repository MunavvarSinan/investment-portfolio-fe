import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Loadable from '../ui-component/Loadable';
import AdminGuard from '../utils/route-guard/AdminGuard';
import MinimalLayout from './../layout/MinimalLayout';
import NavMotion from './../layout/NavMotion';

const adminLogin = Loadable(
  lazy(() => import('../views/pages/admin/login'))
);
const adminRegister = Loadable(
  lazy(() => import('../views/pages/admin/register'))
);

const AdminLoginRoute = () => {
  const location = useLocation();

  return (
    <Route path={['/admin/login', '/admin/register']}>
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <AdminGuard>
              <Route path="/admin/login" component={adminLogin} />
              <Route path="/admin/register" component={adminRegister} />
            </AdminGuard>
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default AdminLoginRoute;
