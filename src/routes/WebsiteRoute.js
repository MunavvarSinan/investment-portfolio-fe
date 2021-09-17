import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Lodable from '../ui-component/Loadable';
import { Website } from '../website';
import AuthGuard from './../utils/route-guard/AuthGuard';
import GuestGuard from './../utils/route-guard/GuestGuard';

const WebsiteRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/home']}>
      <Switch location={location} key={location.pathname}>
          <Route path="/home" component={Website} />
      </Switch>
    </Route>
  );
};

export default WebsiteRoutes;
