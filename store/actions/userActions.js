import {
   CHANGE_USER_LOGIN_FAIL,
   CHANGE_USER_LOGIN_REQUEST,
   CHANGE_USER_LOGIN_SUCCESS,
   LOGIN_USER_FAIL,
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
   REGISTER_USER_FAIL,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   UPDATE_USER_FAIL,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   USER_LOGOUT,
} from '../constants/userConstants';
import { returnErrors } from './errorActions';
import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';

// login user
export const loginUser = (user) => async (dispatch) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOGIN_USER_REQUEST });

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
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: LOGIN_USER_FAIL });
   }
};

// Regsiter user
export const registerUser = (user) => async (dispatch) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const { data } = await axios.post(`${server}/api/users`, user, config);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: REGISTER_USER_FAIL });
   }
};

// Update user profile
export const updateProfile = (user) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: UPDATE_USER_REQUEST });

      const { data } = await axios.put(
         `${server}/api/users/profile`,
         { user },
         tokenConfig(getState)
      );

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: UPDATE_USER_FAIL });
   }
};

// Change user login
export const updateLogin = (passwords) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: CHANGE_USER_LOGIN_REQUEST });

      const { data } = await axios.put(
         `${server}/api/users/profile/login`,
         { passwords },
         tokenConfig(getState)
      );

      dispatch({ type: CHANGE_USER_LOGIN_SUCCESS, payload: data });
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: CHANGE_USER_LOGIN_FAIL });
   }
};

// logout user
export const logout = () => async (dispatch) => {
   dispatch({ type: USER_LOGOUT });

   localStorage.removeItem('user');
   localStorage.removeItem('token');
   localStorage.removeItem('cartItems');
   localStorage.removeItem('savePaymentMethod');
   localStorage.removeItem('schoolShipping');

   // window.location = '/login';
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
