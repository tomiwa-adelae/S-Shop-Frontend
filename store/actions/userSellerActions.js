import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   ADMIN_GET_SELLERS_FAIL,
   ADMIN_GET_SELLERS_REQUEST,
   ADMIN_GET_SELLERS_SUCCESS,
   ADMIN_GET_USERS_FAIL,
   ADMIN_GET_USERS_REQUEST,
   ADMIN_GET_USERS_SUCCESS,
   ADMIN_LOGOUT,
   ADMIN_SELLER_DETAILS_FAIL,
   ADMIN_SELLER_DETAILS_REQUEST,
   ADMIN_SELLER_DETAILS_SUCCESS,
   CHANGE_SELLER_LOGIN_FAIL,
   CHANGE_SELLER_LOGIN_REQUEST,
   CHANGE_SELLER_LOGIN_SUCCESS,
   LOGIN_SELLER_USER_FAIL,
   LOGIN_SELLER_USER_REQUEST,
   LOGIN_SELLER_USER_SUCCESS,
   REGISTER_SELLER_USER_FAIL,
   REGISTER_SELLER_USER_REQUEST,
   REGISTER_SELLER_USER_SUCCESS,
   UPDATE_SELLER_USER_FAIL,
   UPDATE_SELLER_USER_REQUEST,
   UPDATE_SELLER_USER_RESET,
   UPDATE_SELLER_USER_SUCCESS,
} from '../constants/userSellerConstants';
import { returnErrors } from './errorActions';

// Register a new seller
export const registerSeller = (sellerDetails) => async (dispatch) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: REGISTER_SELLER_USER_REQUEST });

      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const { data } = await axios.post(
         `${server}/api/users/sellers`,
         sellerDetails
      );

      dispatch({ type: REGISTER_SELLER_USER_SUCCESS, payload: data });
      dispatch({ type: LOGIN_SELLER_USER_SUCCESS, payload: data });

      localStorage.setItem('seller', JSON.stringify(data.seller));
      localStorage.setItem('sellerToken', JSON.stringify(data.token));
   } catch (err) {
      console.log(err);
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: REGISTER_SELLER_USER_FAIL });
   }
};

// login a new seller
export const loginSeller = (sellerDetails) => async (dispatch) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOGIN_SELLER_USER_REQUEST });

      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const { data } = await axios.post(
         `${server}/api/auth/sellers`,
         sellerDetails
      );

      dispatch({ type: LOGIN_SELLER_USER_SUCCESS, payload: data });
      dispatch({ type: REGISTER_SELLER_USER_SUCCESS, payload: data });

      localStorage.setItem('seller', JSON.stringify(data.seller));
      localStorage.setItem('sellerToken', JSON.stringify(data.token));
   } catch (err) {
      console.log(err);
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: LOGIN_SELLER_USER_FAIL });
   }
};

// Update user profile
export const updateSellerProfile = (details) => async (dispatch, getState) => {
   try {
      dispatch({ type: UPDATE_SELLER_USER_RESET });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: UPDATE_SELLER_USER_REQUEST });

      const { data } = await axios.put(
         `${server}/api/users/sellers/profile`,
         details,
         tokenSellerConfig(getState)
      );

      dispatch({ type: UPDATE_SELLER_USER_SUCCESS, payload: data });
      dispatch({ type: LOGIN_SELLER_USER_SUCCESS, payload: data });

      localStorage.setItem('seller', JSON.stringify(data.seller));
      localStorage.setItem('sellerToken', JSON.stringify(data.token));
   } catch (err) {
      console.log(err);
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: UPDATE_SELLER_USER_FAIL });
   }
};

// Change user login
export const updateSellerLogin = (passwords) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: CHANGE_SELLER_LOGIN_REQUEST });

      const { data } = await axios.put(
         `${server}/api/users/sellers/profile/login`,
         passwords,
         tokenSellerConfig(getState)
      );

      dispatch({ type: CHANGE_SELLER_LOGIN_SUCCESS, payload: data });
      dispatch({ type: LOGIN_SELLER_USER_SUCCESS, payload: data });

      localStorage.setItem('seller', JSON.stringify(data.seller));
      localStorage.setItem('sellerToken', JSON.stringify(data.token));
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: CHANGE_SELLER_LOGIN_FAIL });
   }
};

// Get all users as an admin
export const getAllUsers = () => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_GET_USERS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/users/sellers`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_GET_USERS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_GET_USERS_FAIL });
   }
};

// Get all sellers as an admin
export const getAllSellers = () => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_GET_SELLERS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/users/sellers/all/sellers`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_GET_SELLERS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_GET_SELLERS_FAIL });
   }
};

// Get seller details
export const getAdminSellerDetails = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_SELLER_DETAILS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/users/sellers/${id}`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_SELLER_DETAILS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_SELLER_DETAILS_FAIL });
   }
};

// logout user
export const logoutAdmin = () => async (dispatch) => {
   dispatch({ type: ADMIN_LOGOUT });

   localStorage.removeItem('seller');
   localStorage.removeItem('sellerToken');
   localStorage.removeItem('user');
   localStorage.removeItem('token');
   localStorage.removeItem('cartItems');
   localStorage.removeItem('savePaymentMethod');
   localStorage.removeItem('schoolShipping');
};

export const tokenSellerConfig = (getState) => {
   const token = getState().loginSeller.sellerToken;

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
