import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
// routes
import UserRoutes from './UserRoutes';
import UserLoginRoutes from './userLoginRoutes';
import WebsiteRoutes from './WebsiteRoutes';
import AdminRoutes from './AdminRoutes';

import config from './../config';
import AdminLoginRoute from './adminLoginRoutes';

//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={config.defaultPath} />
      <React.Fragment>
        <WebsiteRoutes />
        <UserLoginRoutes />
        <AdminLoginRoute />
        <UserRoutes />
        <AdminRoutes />
      </React.Fragment>
    </Switch>
  );
};

export default Routes;
