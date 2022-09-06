import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   ADMIN_ORDER_DETAILS_FAIL,
   ADMIN_ORDER_DETAILS_REQUEST,
   ADMIN_ORDER_DETAILS_SUCCESS,
   ADMIN_PAY_ORDER_FAIL,
   ADMIN_PAY_ORDER_REQUEST,
   ADMIN_PAY_ORDER_SUCCESS,
   ADMIN_DELIVER_ORDER_FAIL,
   ADMIN_DELIVER_ORDER_REQUEST,
   ADMIN_DELIVER_ORDER_SUCCESS,
   GET_ADMIN_ORDERS_FAIL,
   GET_ADMIN_ORDERS_REQUEST,
   GET_ADMIN_ORDERS_SUCCESS,
} from '../constants/sellerOrderConstants';
import { returnErrors } from './errorActions';
import { tokenSellerConfig } from './userSellerActions';

// Get my orders
export const getAdminOrders = () => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_ADMIN_ORDERS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/sellers/orders`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: GET_ADMIN_ORDERS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_ADMIN_ORDERS_FAIL });
   }
};

// Get order details
export const getAdminOrderDetails = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_ORDER_DETAILS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/sellers/orders/${id}`,
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_ORDER_DETAILS_FAIL });
   }
};

// Mark order as paid
export const payOrder = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_PAY_ORDER_REQUEST });
      const { data } = await axios.put(
         `${server}/api/sellers/orders/${id}/pay`,
         {},
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_PAY_ORDER_SUCCESS, payload: data });
      dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_PAY_ORDER_FAIL });
   }
};

// Mark order as Delivered
export const deliverOrder = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADMIN_DELIVER_ORDER_REQUEST });
      const { data } = await axios.put(
         `${server}/api/sellers/orders/${id}/deliver/order`,
         {},
         tokenSellerConfig(getState)
      );

      dispatch({ type: ADMIN_DELIVER_ORDER_SUCCESS, payload: data });
      dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADMIN_DELIVER_ORDER_FAIL });
   }
};
