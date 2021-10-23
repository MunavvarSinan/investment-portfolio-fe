import React, { lazy } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';

// project imports
import GuestGuard from '../utils/route-guard/GuestGuard';
import MinimalLayout from '../layout/MinimalLayout';
import NavMotion from '../layout/NavMotion';
import Loadable from '../ui-component/Loadable';

// login routing
const userLogin = Loadable(
  lazy(() => import('../views/pages/user/login'))
);
const userRegister = Loadable(
  lazy(() => import('../views/pages/user/register'))
);


const UserLoginRoutes = () => {
  const location = useLocation();

  return (
    <Route
      path={[
        '/users/login',
        '/users/register'
      ]}
    >
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <GuestGuard>
              <Route path="/users/login" component={userLogin} />
              <Route path="/users/register" component={userRegister} />
            </GuestGuard>
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default UserLoginRoutes;
