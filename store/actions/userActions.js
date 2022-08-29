import {
   LOGIN_USER_FAIL,
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
} from '../constants/userConstants';
import { returnErrors } from './errorActions';
import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';

export const loginUser = (user) => async (dispatch) => {
   try {
      dispatch({ type: LOGIN_USER_REQUEST });
      dispatch({ type: CLEAR_ERRORS });

      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const { data } = await axios.post(`${server}/api/auth`, user, config);

      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
   } catch (err) {
      console.log(err);
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: LOGIN_USER_FAIL });
   }
};

export const tokenConfig = (getState) => {
   const token = getState().login.token;

   const config = {
      headers: {
         'Content-type': 'application/json',
      },
   };

   if (token) {
      config.headers['x-auth-token'] = token;
   }

   return config;
};
