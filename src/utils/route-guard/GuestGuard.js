import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const GuestGuard = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { isUserLoggedIn , user} = account;
  // console.log(user.id);

  if (isUserLoggedIn == true) {
    return <Redirect to="/users/dashboard" />;
  }
  if (isUserLoggedIn == 'false') {
    return <Redirect to="/home" />;
  }

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;
