import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import { useSelector } from 'react-redux';
// material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonEarningCard from '../../../ui-component/cards/Skeleton/EarningCard';

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
      position: 'relative',
      zIndex: 5,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background: theme.palette.primary[800],
      borderRadius: '50%',
      zIndex: 1,
      top: '-85px',
      right: '-95px',
      [theme.breakpoints.down('xs')]: {
        top: '-105px',
        right: '-140px',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      width: '210px',
      height: '210px',
      background: theme.palette.primary[800],
      borderRadius: '50%',
      top: '-125px',
      right: '-15px',
      opacity: 0.5,
      [theme.breakpoints.down('xs')]: {
        top: '-155px',
        right: '-70px',
      },
    },
  },
  content: {
    padding: '35px !important',
    // padding: '23px !important'
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.primary[800],
    color: '#fff',
    marginTop: '8px',
  },
  cardHeading: {
    fontSize: '24px',
    fontWeight: 800,
    marginRight: '8px',
    marginTop: '14px',
    marginBottom: '6px',
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.palette.primary[200],
  },
  avatarCircle: {
    ...theme.typography.smallAvatar,
    cursor: 'pointer',
    backgroundColor: theme.palette.primary[200],
    color: theme.palette.primary.dark,
  },
  circleIcon: {
    transform: 'rotate3d(1, 1, 1, 45deg)',
  },
}));

//===========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const AdminGetUserCount = ({ isLoading, allUsers, allAdmins, heading }) => {
  const classes = useStyles();

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
    <React.Fragment>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Grid item sx={{ mb: 1.25 }}>
                    <Typography className={classes.cardHeading}>
                      {heading}{' '}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.cardHeading}>
                    {allUsers || allAdmins}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </React.Fragment>
  );
};

AdminGetUserCount.propTypes = {
  isLoading: PropTypes.bool,
};

export default AdminGetUserCount;
