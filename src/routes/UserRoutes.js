import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import('../views/dashboard/user-dashboard'))
);
const AddOrWithdrawMoney = Loadable(
  lazy(() => import('../views/pages/user/addOrWithdraw'))
);
// utilities routing

const TransactionHistory = Loadable(
  lazy(() => import('../views/pages/user/transactionHistory'))
);

const ProfilePage = Loadable(
  lazy(() => import('../views/pages/user/ProfilePage'))
)
const ErrorPage = Loadable(
  lazy(() => import('../views/pages/error'))
)
// sample page routing

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/users/dashboard', '/users/transaction-history','/users/addMoney','/users/profile', '/users/error']}>
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
            <Route path="/users/addMoney" component={AddOrWithdrawMoney} />
            <Route path="/users/profile" component={ProfilePage} />
            <Route path="/users/error" component={ErrorPage} />
          </AuthGuard>
          {/* </GuestGuard> */}
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default MainRoutes;
