import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import GuestGuard from '../utils/route-guard/GuestGuard';
import MinimalLayout from '../layout/MinimalLayout';
import NavMotion from '../layout/NavMotion';
import Loadable from '../ui-component/Loadable';

// login routing
const userLogin = Loadable(lazy(() => import('../views/pages/user/login')));

const ResetPassword = Loadable(
  lazy(() => import('../views/pages/user/restPassword'))
);
const NewPassword = Loadable(
  lazy(() => import('../views/pages/user/newPassword'))
);
const ResetPswdSent = Loadable(
  lazy(() => import('../views/pages/user/restPassword/successScreen'))
);

const UserLoginRoutes = () => {
  const location = useLocation();

  return (
    <Route
      path={[
        '/users/login',
        '/users/resetPassword',
        '/users/resetEmailSent',
        '/users/reset/:token'
      ]}
    >
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <GuestGuard>
              <Route path="/users/login" component={userLogin} />
              <Route path="/users/resetPassword" component={ResetPassword} />
              <Route path="/users/resetEmailSent" component={ResetPswdSent} />
              <Route path="/users/reset/:token" component={NewPassword} />
            </GuestGuard>
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default UserLoginRoutes;
