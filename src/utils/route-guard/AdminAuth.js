import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AdminAuth = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { isAdminLoggedIn } = account;

  if (isAdminLoggedIn  == 'true') {
    // console.log(admin.username);
    return <Redirect to="/admin/dashboard" />;
    
  }
  if (isAdminLoggedIn == false) {
    return <Redirect to="/admin/login" />;
  }
  return children;
};

AdminAuth.prototype = {
  children: PropTypes.node,
};

export default AdminAuth;
