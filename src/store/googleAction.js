import axios from 'axios';

import {
  LOGIN_WITH_EMAIL_FAIL,
  LOGIN_WITH_EMAIL_LOADING,
  LOGIN_WITH_EMAIL_SUCCESS,
} from './actions';
export const loginUserWithEmail =
  (formData, history) => async (dispatch, getState) => {
    dispatch({ type: LOGIN_WITH_EMAIL_LOADING });
    try {
      const response = await axios.post('/auth/login', formData);

      dispatch({
        type: LOGIN_WITH_EMAIL_SUCCESS,
        payload: { token: response.data.token, me: response.data.me },
      });

      history.push('/');
    } catch (err) {
      dispatch({
        type: LOGIN_WITH_EMAIL_FAIL,
        payload: { error: err.response.data.message },
      });
    }
  };
