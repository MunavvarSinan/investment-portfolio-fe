import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

//-----------------------|| AUTH GUARD ||-----------------------//

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AdminGuard = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { isAdminLoggedIn } = account;

  if (isAdminLoggedIn == true) {
   return <Redirect to="/admin/dashboard" />;
  }
  if(isAdminLoggedIn == 'false') {
    return <Redirect to="/home" />
  }

  return children;
};

AdminGuard.propTypes = {
  children: PropTypes.node,
};

export default AdminGuard;
