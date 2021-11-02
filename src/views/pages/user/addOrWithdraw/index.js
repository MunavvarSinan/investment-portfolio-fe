import React from 'react';
import MainCard from '../../../../ui-component/cards/MainCard';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Formik } from 'formik';
import axios from 'axios';
import config from '../../../../config';
import * as Yup from 'yup';
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  amount: {
    ...theme.typography.customInput,

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

const AddMoneyRequest = ({ ...others }) => {
  const account = useSelector((state) => state.account);
  const classes = useStyles();
  const scriptedRef = useScriptRef();
  const history = useHistory();
  return (
    <MainCard title="Add Or Withdraw Request">
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

    </Box> */}
      <Formik
        initialValues={{
          amount: '',
          addOrWithdraw: '',
        }}
        validationSchema={Yup.object().shape({
          amount: Yup.string().required('Amount is required'),
          addOrWithdraw: Yup.string().required('Please select any option'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(config.API_SERVER + 'users/request', {
                email: account.user.email,
                amount: values.amount,
                addOrWithdraw: values.addOrWithdraw,
              })
              .then(function (response) {
                // console.log(response);
                history.push('/users/dashboard');
                if (response.data.success) {
                //   console.log(response.data);
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
              error={Boolean(touched.addOrWithdraw && errors.addOrWithdraw)}
              className={classes.addOrWithdraw}
            >
              <InputLabel htmlFor="outlined-adornment-addOrWithdraw">
                Select
              </InputLabel>
              <Select
                id="outlined-adornment-addOrWithdraw"
                type="text"
                value={values.addOrWithdraw}
                name="addOrWithdraw"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Select"
                select
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              >
                {' '}
                <MenuItem value={'Add'}>Add</MenuItem>
                <MenuItem value={'Withdraw'}>Withdraw</MenuItem>
              </Select>

              {touched.addOrWithdraw && errors.addOrWithdraw && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-addOrWithdraw"
                >
                  {' '}
                  {errors.addOrWithdraw}{' '}
                </FormHelperText>
              )}
              {/* {console.log(values.addOrWithdraw)} */}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.amount && errors.amount)}
              className={classes.amount}
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type="Number"
                value={values.amount}
                name="amount"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Amount"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.amount && errors.amount && (
                <FormHelperText error id="standard-weight-helper-text-amount">
                  {' '}
                  {errors.amount}{' '}
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
                  Request
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </MainCard>
  );
};

export default AddMoneyRequest;
