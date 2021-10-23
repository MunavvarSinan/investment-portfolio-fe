import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonTotalOrderCard from '../../../ui-component/cards/Skeleton/EarningCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
      // background: '#046b72cc',
      borderRadius: '50%',
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
      width: '210px',
      height: '210px',
      background: theme.palette.primary[800],
      // background: '#007d87',
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
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.secondary[800],
    marginTop: '8px',
  },
  avatarRight: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary[200],
    zIndex: 1,
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
    color: theme.palette.secondary[200],
  },
  avatarCircle: {
    cursor: 'pointer',
    ...theme.typography.smallAvatar,
    backgroundColor: theme.palette.secondary[200],
    color: theme.palette.secondary.dark,
  },
  circleIcon: {
    transform: 'rotate3d(1, 1, 1, 45deg)',
  },
  menuItem: {
    marginRight: '14px',
    fontSize: '1.25rem',
  },
}));

//-----------------------|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||-----------------------//

const TotalOrderLineChartCard = ({ isLoading }) => {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const [timeValue, setTimeValue] = React.useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                {/* <Grid item>
                                    <Avatar variant="rounded" className={classes.avatar}>
                                        <LocalMallOutlinedIcon fontSize="inherit" />
                                    </Avatar>
                                </Grid> */}
                <Grid item xs={12}>
                  <Typography className={classes.cardHeading}>
                    Current Amount
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 0.75 }}>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item>
                      {/* {timeValue ? (
                                                <Typography className={classes.cardHeading}>₹ {account.user.currentAmount}</Typography>
                                            ) : ( */}
                      <Typography className={classes.cardHeading}>
                        ₹ {account.user.currentAmount}
                      </Typography>
                      {/* )} */}
                    </Grid>
                    <Grid item>
                      <Avatar className={classes.avatarCircle}>
                        {account.user.currentAmount <
                        account.user.investedAmount ? (
                          <ArrowDownwardIcon
                            fontSize="inherit"
                            className={classes.circleIcon}
                          />
                        ) : (
                          <ArrowUpwardIcon
                            fontSize="inherit"
                            className={classes.circleIcon}
                          />
                        )}
                      </Avatar>
                    </Grid>
                    {/* <Grid item xs={12}>
                                            <Typography className={classes.subHeading}>Current Amount</Typography>
                                        </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </React.Fragment>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;
