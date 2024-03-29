import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import TotalIncomeCard from '../../../ui-component/cards/Skeleton/TotalIncomeCard';
import {RemoveCircleOutline} from '@material-ui/icons'
// assets

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background:
        'linear-gradient(210.04deg, ' +
        theme.palette.primary[200] +
        ' -50.94%, rgba(144, 202, 249, 0) 83.49%)',
      borderRadius: '50%',
      top: '-30px',
      right: '-180px',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background:
        'linear-gradient(140.9deg, ' +
        theme.palette.primary[200] +
        ' -14.02%, rgba(144, 202, 249, 0) 77.58%)',
      borderRadius: '50%',
      top: '-160px',
      right: '-130px',
    },
  },
  content: {
    padding: '16px !important',
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    // backgroundColor: theme.palette.primary[800],
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
  },
  primary: {
    color: '#fff',
  },
  secondary: {
    color: theme.palette.primary.light,
    marginTop: '5px',
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));


//-----------------------|| DASHBOARD - TOTAL INCOME LIGHT CARD ||-----------------------//

const TotalIncomeLightCard = ({ isLoading }) => {
  const classes = useStyles();
const history = useHistory()
  return (
    <React.Fragment>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <MainCard className={classes.card} contentClass={classes.content} >
          <List className={classes.padding}>
            <ListItem
              alignItems="center"
              disableGutters
              className={classes.padding}

            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  className={classes.avatar}
                  onClick={() => history.push('/users/addMoney')}
                >
                  <RemoveCircleOutline  fontSize="inherit" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  mt: 0.45,
                  mb: 0.45,
                }}
                className={classes.padding}
                primary={<Typography variant="h4" className={classes.primary}>Withdraw Fund</Typography>}
              />
            </ListItem>
          </List>
        </MainCard>
      )}
    </React.Fragment>
  );
};

TotalIncomeLightCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalIncomeLightCard;
