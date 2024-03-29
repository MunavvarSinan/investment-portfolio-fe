import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import configData from '../../../../config';
import { useHistory } from 'react-router-dom';
// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  // Avatar,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
// import Avatar, { ConfigProvider } from 'react-avatar';
import UserAvatar from 'react-user-avatar';
// project imports
import MainCard from '../../../../ui-component/cards/MainCard';
import Transitions from '../../../../ui-component/extended/Transitions';
import { USER_LOGOUT, ADMIN_LOGOUT } from './../../../../store/actions';

// assets
import { IconLogout, IconUser } from '@tabler/icons';

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    maxWidth: '350px',
    minWidth: '300px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  headerAvatar: {
    cursor: 'pointer',
    ...theme.typography.mediumAvatar,
    margin: '8px 0 8px 8px !important',
  },
  profileChip: {
    height: '48px',
    alignItems: 'center',
    // borderRadius: '27px',
    transition: 'all .2s ease-in-out',
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#fff',
    '&[aria-controls="menu-list-grow"], &:hover': {
      color: theme.palette.primary.light,
      '& svg': {},
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: '12px',
  },
  listItem: {
    marginTop: '5px',
  },
  cardContent: {
    padding: '16px !important',
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: '16px',
    marginTop: '16px',
  },
  searchControl: {
    width: '100%',
    paddingRight: '8px',
    paddingLeft: '16px',
    marginBottom: '16px',
    marginTop: '16px',
  },
  startAdornment: {
    fontSize: '1rem',
    color: theme.palette.grey[500],
  },
  flex: {
    display: 'flex',
  },
  name: {
    marginLeft: '2px',
    fontWeight: 400,
  },
  ScrollHeight: {
    height: '100%',
    maxHeight: 'calc(100vh - 250px)',
    overflowX: 'hidden',
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: '#fff',
  },
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const account = useSelector((state) => state.account);
  const history = useHistory();

  const dispatcher = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleLogout = () => {
    console.log(account.isUserLoggedIn);
    console.log(account.isAdminLoggedIn);

    if (account.isAdminLoggedIn == true) {
      axios
        .post(
          configData.API_SERVER + 'admin/logout',
          {},
          { headers: { Authorization: `${account.token}` } }
        )
        .then(function (response) {
          dispatcher({
            type: ADMIN_LOGOUT,
            payload: {
              tokenId: account.token,
              isAdminLoggedIn: false,
            },
          });
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
    }
    if (account.isUserLoggedIn == true) {
      axios
        .post(
          configData.API_SERVER + 'users/logout',
          {},
          { headers: { Authorization: `${account.token}` } }
        )
        .then(function (response) {
          dispatcher({
            type: USER_LOGOUT,
            payload: {
              tokenId: account.token,
              isUserLoggedIn: false,
            },
          });
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={
          <UserAvatar
            size="48"
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            name={
              account.isAdminLoggedIn
                ? account.admin.username
                : account.isUserLoggedIn
                ? account.user.username
                : 'Login'
            }
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item className={classes.flex}>
                        <Typography variant="h4">Hello,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          className={classes.name}
                        >
                          {account.isAdminLoggedIn
                            ? account.admin.username
                            : account.isUserLoggedIn
                            ? account.user.username
                            : null}
                        </Typography>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>

                    <Divider />
                    <PerfectScrollbar className={classes.ScrollHeight}>
                      {/* <UpgradePlanCard /> */}
                      <Divider />

                      <List component="nav" className={classes.navContainer}>
                      <ListItemButton
                          // LinkComponent
                          className={classes.listItem}
                          sx={{
                            borderRadius: customization.borderRadius + 'px',
                          }}
                          selected={selectedIndex === 4}
                          onClick={() => {
                            history.push('/users/profile');
                            setOpen(false);
                          }}
                        >
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Profile</Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          className={classes.listItem}
                          sx={{
                            borderRadius: customization.borderRadius + 'px',
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                       
                      </List>
                    </PerfectScrollbar>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ProfileSection;
