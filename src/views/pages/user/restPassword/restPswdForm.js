import React from 'react';
import { useHistory } from 'react-router-dom';
import configData from '../../../../config';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
  },
}));

//============================|| API JWT - LOGIN ||============================//

const ResetForm = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();
  const history = useHistory();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            // .matches(/^([a-z\-]+@smartfunds\.co\.in)$/, 'Not a valid Email')
            .max(255)
            .required('Email is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(configData.API_SERVER + 'users/reset-password', {
                email: values.email,
              })
              .then(function (response) {
                if (response.data.success) {
                  // console.log(response);
                  history.push('/users/resetEmailSent');
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
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                // onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {' '}
                  {errors.email}{' '}
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
                  onClick={() => {
                    axios
                      .post(configData.API_SERVER + 'users/reset-password', {
                        email: values.email,
                      })
                      .then((res) => res);
                  }}
                >
                  Recover Account
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ResetForm;
