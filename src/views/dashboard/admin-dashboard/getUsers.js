import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import config from '../../../config';
import { useSelector } from 'react-redux';
// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Menu, MenuItem, Typography } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonEarningCard from '../../../ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from './../../../assets/images/icons/earning.svg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppOutlined';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@material-ui/icons/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveOutlined';

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

const AdminGetUserCount = ({ isLoading, allUsers, allAdmins }) => {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getData();
    
  }, []);
  useEffect(() => {
  }, []);
  const getData = async () => {
    const response = await axios.get(config.API_SERVER + 'admin/getAllUsers');
    setUsers(response.data.users);
    const adm =  await axios.get(config.API_SERVER + 'admin/getAllAdmins')
    setAdmins(adm.data.admins)
    console.log(response);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
 Total Users                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" >
                <Grid item >
                  <Typography className={classes.cardHeading} >
                      {allUsers || allAdmins}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>
                Invested Amount
              </Typography>
            </Grid> */}
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
