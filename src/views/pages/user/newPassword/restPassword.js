import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';

import configData from '../../../../config';
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

//============================|| API JWT v- LOGIN ||============================//

const RestPassword = ({ ...others }) => {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useParams();
  // console.log(token);
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      const response = await axios
        .get(configData.API_SERVER + 'users/reset', {
          resetToken: token,
        })
        .then((res) => {
          if (res.data.message === 'password reset link a-ok') {
            console.log('ok');
          } else {
            console.log('Not ok');
          }
        });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Grid item xs={12}></Grid>
      <Formik
        initialValues={{
          //   email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(configData.API_SERVER + 'users/new-password', {
                password: values.password,
                resetToken: token,
              })
              .then(function (response) {
                history.push('/users/login');
                // console.log(response);
                if (response.data.success) {
                  // console.log(response.data);

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
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
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
                  id="standard-weight-helper-text-password-login"
                >
                  {' '}
                  {errors.password}{' '}
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
                  Update Password
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestPassword;
