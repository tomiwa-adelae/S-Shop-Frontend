import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   GET_ADMIN_PRODUCTS_FAIL,
   GET_ADMIN_PRODUCTS_REQUEST,
   GET_ADMIN_PRODUCTS_SUCCESS,
   GET_SELLER_PRODUCTS_FAIL,
   GET_SELLER_PRODUCTS_REQUEST,
   GET_SELLER_PRODUCTS_SUCCESS,
   GET_SELLER_PRODUCT_FAIL,
   GET_SELLER_PRODUCT_REQUEST,
   GET_SELLER_PRODUCT_SUCCESS,
   GET_ADMIN_PRODUCT_FAIL,
   GET_ADMIN_PRODUCT_REQUEST,
   GET_ADMIN_PRODUCT_SUCCESS,
   SELLER_CREATE_PRODUCT_FAIL,
   SELLER_CREATE_PRODUCT_REQUEST,
   SELLER_CREATE_PRODUCT_SUCCESS,
   SELLER_DELETE_PRODUCT_FAIL,
   SELLER_DELETE_PRODUCT_REQUEST,
   SELLER_DELETE_PRODUCT_RESET,
   SELLER_DELETE_PRODUCT_SUCCESS,
   SELLER_UPDATE_PRODUCT_FAIL,
   SELLER_UPDATE_PRODUCT_REQUEST,
   SELLER_UPDATE_PRODUCT_SUCCESS,
} from '../constants/sellerProductConstants';
import { returnErrors } from './errorActions';
import { tokenSellerConfig } from './userSellerActions';

// Get the products of a seller
export const getSellerProducts = () => async (dispatch, getState) => {
   try {
      dispatch({ type: SELLER_DELETE_PRODUCT_RESET });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_SELLER_PRODUCTS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/seller/products`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: GET_SELLER_PRODUCTS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_SELLER_PRODUCTS_FAIL });
   }
};

// Get the products of a admin
export const getAdminProducts = () => async (dispatch, getState) => {
   try {
      dispatch({ type: SELLER_DELETE_PRODUCT_RESET });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_ADMIN_PRODUCTS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/seller/products/admin/products`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: GET_ADMIN_PRODUCTS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_ADMIN_PRODUCTS_FAIL });
   }
};

// Get a single product of a seller
export const getSellerProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_SELLER_PRODUCT_REQUEST });

      const { data } = await axios.get(
         `${server}/api/seller/products/${id}`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: GET_SELLER_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_SELLER_PRODUCT_FAIL });
   }
};

// Get a single product of a admin
export const getAdminProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_ADMIN_PRODUCT_REQUEST });

      const { data } = await axios.get(
         `${server}/api/seller/products/${id}/admin/product`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: GET_ADMIN_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_ADMIN_PRODUCT_FAIL });
   }
};

// Create a new product (seller)
export const createProduct = (details) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SELLER_CREATE_PRODUCT_REQUEST });

      const { data } = await axios.post(
         `${server}/api/seller/products`,
         details,
         tokenSellerConfig(getState)
      );

      dispatch({ type: SELLER_CREATE_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: SELLER_CREATE_PRODUCT_FAIL });
   }
};

// Create a new product (seller)
export const updateProduct = (details, id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SELLER_UPDATE_PRODUCT_REQUEST });

      const { data } = await axios.put(
         `${server}/api/seller/products/${id}`,
         details,
         tokenSellerConfig(getState)
      );

      dispatch({ type: SELLER_UPDATE_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: SELLER_UPDATE_PRODUCT_FAIL });
   }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SELLER_DELETE_PRODUCT_REQUEST });

      const { data } = await axios.delete(
         `${server}/api/seller/products/${id}`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: SELLER_DELETE_PRODUCT_SUCCESS });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: SELLER_DELETE_PRODUCT_FAIL });
   }
};
