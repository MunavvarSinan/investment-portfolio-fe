import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../../../config';
import { useHistory } from 'react-router';
// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Grid,
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// style constant
const useStyles = makeStyles((theme) => ({
  Input: {
    ...theme.typography.customInput,
  },
}));

//============================|| API JWT - LOGIN ||============================//

const RestForm = (props, { ...others }) => {
  const classes = useStyles();
  const history = useHistory();
  const account = useSelector((state) => state.account);
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // console.log(account);
  return (
    <React.Fragment>
      <Grid item xs={12}></Grid>
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .max(255)
            .required('Current password is required'),
          newPassword: Yup.string()
            .max(255)
            .required('New password is required'),
          // confirmPassword: Yup.string().max(255).matches(newPassword).required()
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(config.API_SERVER + 'users/change-password', {
                email: account.user.email,
                password: values.password,
                newPassword: values.newPassword,
              })
              .then(function (response) {
                // console.log(response);
                if (response.data.message == 'password updated') {
                  // console.log(response);
                  // alert('password updated successfully ')
                  history.push('/users/dashboard');
                  if (scriptedRef.current) {
                    setStatus({ success: true });
                    setSubmitting(false);
                  }
                } else {
                  setStatus({ success: false });
                  setErrors({ submit: response.data.msg });
                  setSubmitting(false);
                }
              })
              .catch(function (error) {
                // alert(error)
                setStatus({ success: false });
                setErrors({ submit: error.response.data.msg });
                setSubmitting(false);
              });
          } catch (err) {
            console.error(err);
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
            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.Input}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Current Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
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
                label="Password"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-newPassword"
                >
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.newPassword && errors.newPassword)}
              className={classes.Input}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.newPassword}
                name="newPassword"
                onBlur={handleBlur}
                onChange={handleChange}
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
                label="New Password"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.newPassword && errors.newPassword && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {' '}
                  {errors.newPassword}{' '}
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
                  Change Password{' '}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestForm;
