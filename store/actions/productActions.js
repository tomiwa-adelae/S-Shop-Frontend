import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   GET_LATEST_PRODUCTS_FAIL,
   GET_LATEST_PRODUCTS_REQUEST,
   GET_LATEST_PRODUCTS_SUCCESS,
   GET_MOST_RATED_PRODUCTS_REQUEST,
   GET_MOST_RATED_PRODUCTS_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_SINGLE_PRODUCT_FAIL,
   GET_SINGLE_PRODUCT_REQUEST,
   GET_SINGLE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FROM_BRAND_REQUEST,
   GET_PRODUCTS_FROM_BRAND_FAIL,
   GET_PRODUCTS_FROM_BRAND_SUCCESS,
   CREATE_PRODUCT_REVIEW_FAIL,
   CREATE_PRODUCT_REVIEW_REQUEST,
   CREATE_PRODUCT_REVIEW_SUCCESS,
} from '../constants/productConstants';
import { returnErrors } from './errorActions';
import { tokenConfig } from './userActions';

// Get all products
export const getProducts = () => async (dispatch) => {
   dispatch({ type: GET_PRODUCTS_REQUEST });
   try {
      const { data } = await axios.get(`${server}/api/products`);

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_PRODUCTS_FAIL });
   }
};

// Get latest products
export const getLatestProducts = () => async (dispatch) => {
   dispatch({ type: GET_LATEST_PRODUCTS_REQUEST });
   try {
      const { data } = await axios.get(`${server}/api/products/latest`);

      dispatch({ type: GET_LATEST_PRODUCTS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_LATEST_PRODUCTS_FAIL });
   }
};

// Get most rated products
export const getMostRatedProducts = () => async (dispatch) => {
   dispatch({ type: GET_MOST_RATED_PRODUCTS_REQUEST });
   try {
      const { data } = await axios.get(
         `${server}/api/products/most/rated/products`
      );

      dispatch({ type: GET_MOST_RATED_PRODUCTS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_MOST_RATED_PRODUCTS_SUCCESS });
   }
};

// Get single product by Id
export const getSingleProduct = (id) => async (dispatch) => {
   dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
   try {
      const { data } = await axios.get(`${server}/api/products/${id}`);

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_SINGLE_PRODUCT_FAIL });
   }
};

// Get latest brand products
export const getProductsFromBrand = (brand, id) => async (dispatch) => {
   try {
      dispatch({ type: GET_PRODUCTS_FROM_BRAND_REQUEST });

      const { data } = await axios.get(
         `${server}/api/products/more/${brand}/products/${id}`
      );

      dispatch({ type: GET_PRODUCTS_FROM_BRAND_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_PRODUCTS_FROM_BRAND_FAIL });
   }
};

// Create product review
export const createProductReview =
   (id, review) => async (dispatch, getState) => {
      try {
         dispatch({ type: CLEAR_ERRORS });
         dispatch({ type: CREATE_PRODUCT_REVIEW_REQUEST });

         const { data } = await axios.post(
            `${server}/api/products/${id}/reviews`,
            review,
            tokenConfig(getState)
         );

         dispatch({ type: CREATE_PRODUCT_REVIEW_SUCCESS, payload: data });
      } catch (err) {
         console.log(err);
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: CREATE_PRODUCT_REVIEW_FAIL });
      }
   };
