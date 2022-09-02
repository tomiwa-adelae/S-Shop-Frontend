import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   ADMIN_LOGOUT,
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
