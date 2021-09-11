import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Website } from '../website';
import { ComingSoon } from '../website/pages/comingsoon';
import history from '../history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Website} />
        <Route path="/coming-soon" component={ComingSoon} />
      </Switch>
    </Router>
  );
}
