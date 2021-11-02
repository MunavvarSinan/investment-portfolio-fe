import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// login option 3 routing
import { Website } from '../website';

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const SampleRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.pathname}>
        <Route path="/home" component={Website} />
      </Switch>
    </>
  );
};

export default SampleRoutes;
