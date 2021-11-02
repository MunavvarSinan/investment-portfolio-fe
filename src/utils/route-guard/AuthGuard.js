import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const AuthGuard = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { isUserLoggedIn , user} = account;
  // console.log(user);

  if (isUserLoggedIn == 'true') {
    return <Redirect to="/users/dashboard" />;
  }
  if (isUserLoggedIn == false) {
    return <Redirect to="/home" />;
  }



  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
