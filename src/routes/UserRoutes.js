import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';
import GuestGuard from '../utils/route-guard/GuestGuard';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import('../views/dashboard/user-dashboard'))
);
const AddMoneyRequest = Loadable(
  lazy(() => import('../views/pages/user/addMoneyRequest'))
);
// utilities routing

const TransactionHistory = Loadable(
  lazy(() => import('../views/utilities/TransactionHistory'))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/users/dashboard', '/users/transaction-history','/users/addMoney']}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            {/* <GuestGuard> */}
            <Route
              exact
              path="/users/dashboard"
              component={DashboardDefault}
              key={1}
            />

            <Route
              path="/users/transaction-history"
              component={TransactionHistory}
            />
            <Route path="/users/addMoney" component={AddMoneyRequest} />
            <Route path="/sample-page" component={SamplePage} />
          </AuthGuard>
          {/* </GuestGuard> */}
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default MainRoutes;
