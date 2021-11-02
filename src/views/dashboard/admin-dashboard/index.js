import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
// material-ui
import { Grid } from '@material-ui/core';

// project imports

import { gridSpacing } from './../../../store/constant';
import AdminGetUserCount from './getUsers';

//-----------------------|| DEFAULT userDASHBOARD ||-----------------------//

const AdminDashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, []);
  const getData = async () => {
    const response = await axios.get(config.API_SERVER + 'admin/getAllUsers');
    setUsers(response.data.users);
    const adm = await axios.get(config.API_SERVER + 'admin/getAllAdmins');
    setAdmins(adm.data.admins);
    // console.log(response);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <AdminGetUserCount
              isLoading={isLoading}
              allUsers={users.length}
              heading="Total Users"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <AdminGetUserCount
              isLoading={isLoading}
              allAdmins={admins.length}
              heading="Total Admins"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
