import React from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { Typography } from '@material-ui/core';

// project imports
import NavGroup from './NavGroup';
import menuItem from '../../../../components/user-menu';
import adminMenuItems from '../../../../components/admin-menu';
//-----------------------|| SIDEBAR MENU LIST ||-----------------------//

const MenuList = () => {
  const account = useSelector((state) => state.account);
  const { isUserLoggedIn, isAdminLoggedIn, admin } = account;
  if (isUserLoggedIn) {
    const userNavavItems = menuItem.items.map((item) => {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    });

    return userNavavItems;
  } 
  else if (isAdminLoggedIn) {
    //   console.log(admin.username);
    const adminNavItems = adminMenuItems.items.map((item) => {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} varient="h6" color="error" align="center">
              Menu Items error
            </Typography>
          );
      }
    });
    return adminNavItems;
  } else {
      return null 
  }
};

export default MenuList;
