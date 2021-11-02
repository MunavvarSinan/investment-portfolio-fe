import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  useMediaQuery,
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project import
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from './../../../../ui-component/extended/AnimateButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import config from '../../../../config';

const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
  signDivider: {
    flexGrow: 1,
  },
  signText: {
    cursor: 'unset',
    margin: theme.spacing(2),
    padding: '5px 56px',
    borderColor: theme.palette.grey[100] + ' !important',
    color: theme.palette.grey[900] + '!important',
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '8px',
    },
  },
  Input: {
    ...theme.typography.customInput,
  },
  number: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));

const AdminUserRestRegister = ({ setOpen, ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          email: '',
          mobileNumber: '',
          password: '',
          submit: null,
        }}
        // .matches(/^([a-z\-]+@smartfunds\.co\.in)$/, 'Not a valid Email').  *** For custum email domain ***
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          mobileNumber: Yup.number('Number is invalid').required(
            'Mobile number is required'
          ),
          username: Yup.string().required('Username is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(config.API_SERVER + 'users/register', {
                username: values.username,
                password: values.password,
                mobileNumber: values.mobileNumber,
                email: values.email,
              })
              .then(function (response) {
                // console.log(response);
                if (response.data.success) {
                  setOpen(false);
                } else {
                  setStatus({ success: false });
                  setErrors({ submit: response.data.msg });
                  setSubmitting(false);
                }
              })
              .catch(function (error) {
                setStatus({ success: false });
                setErrors({ submit: error.response.data.msg });
                setSubmitting(false);
              });
          } catch (err) {
            // console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  name="username"
                  id="username"
                  type="text"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={classes.Input}
                  error={touched.username && Boolean(errors.username)}
                />
                {touched.username && errors.username && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.username}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  margin="normal"
                  name="mobileNumber"
                  id="mobileNumber"
                  type="number"
                  value={values.mobileNumer}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={(classes.Input, classes.number)}
                  error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                />
                {touched.mobileNumber && errors.mobileNumber && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.mobileNumber}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.Input}
            >
              <InputLabel htmlFor="outlined-adornment-email-register">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {' '}
                  {errors.email}{' '}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.Input}
            >
              <InputLabel htmlFor="outlined-adornment-password-register">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-register"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {errors.submit && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box
              sx={{
                mt: 2,
              }}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Add User{' '}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AdminUserRestRegister;
