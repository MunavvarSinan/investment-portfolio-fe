import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';
import GuestGuard from '../utils/route-guard/GuestGuard';

// login option 3 routing
import { Website } from '../website';

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const SampleRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.pathname}>
        {/* <GuestGuard> */}
        
          <Route path="/home" component={Website} />
        {/* </GuestGuard> */}
        
      </Switch>
    </>
  );
};

export default SampleRoutes;
