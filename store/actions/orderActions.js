import axios from 'axios';
import {
   CREATE_ORDER_FAIL,
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_RESET,
   CREATE_ORDER_SUCCESS,
   GET_MY_ORDERS_FAIL,
   GET_MY_ORDERS_REQUEST,
   GET_MY_ORDERS_SUCCESS,
   ORDER_DETAILS_FAIL,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_SUCCESS,
   ORDER_SIMILAR_PRODUCT_FAIL,
   ORDER_SIMILAR_PRODUCT_REQUEST,
   ORDER_SIMILAR_PRODUCT_SUCCESS,
} from '../constants/orderConstants';
import { returnErrors } from './errorActions';
import { server } from '../../config/server';
import { CLEAR_CART_ITEMS } from '../constants/cartConstants';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import { tokenConfig } from './userActions';

// Get order details
export const getOrderDetails = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ORDER_DETAILS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/orders/${id}`,
         tokenConfig(getState)
      );

      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ORDER_DETAILS_FAIL });
   }
};

// Get similar products
export const getOrderSimilarProducts =
   (category, id) => async (dispatch, getState) => {
      try {
         dispatch({ type: ORDER_SIMILAR_PRODUCT_REQUEST });

         const { data } = await axios.get(
            `${server}/api/products/similar/products/${category}/${id}`
         );

         dispatch({ type: ORDER_SIMILAR_PRODUCT_SUCCESS, payload: data });
      } catch (err) {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: ORDER_SIMILAR_PRODUCT_FAIL });
      }
   };

export const createOrder = () => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: CREATE_ORDER_RESET });
      dispatch({ type: CREATE_ORDER_REQUEST });

      const user = getState().login.user.id;
      const cartItems = getState().cart.cartItems;
      const paymentMethod = getState().paymentMethod.paymentMethod;
      const location = getState().schoolShipping.location;

      const toPrice = (num) => Number(num.toFixed(2));
      const totalPrice = toPrice(
         cartItems.reduce((a, c) => a + c.qty * c.price, 0)
      );
      const orderDetails = {
         user,
         cartItems,
         paymentMethod,
         location,
         totalPrice,
      };

      const { data } = await axios.post(
         `${server}/api/orders`,
         orderDetails,
         tokenConfig(getState)
      );

      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      dispatch({ type: CLEAR_CART_ITEMS });

      localStorage.removeItem('cartItems');
      localStorage.removeItem('schoolShipping');
      localStorage.removeItem('savePaymentMethod');
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: CREATE_ORDER_FAIL });
   }
};

// Get my order
export const getMyOrders = () => async (dispatch, getState) => {
   try {
      dispatch({ type: GET_MY_ORDERS_REQUEST });

      const { data } = await axios.get(
         `${server}/api/orders/myorders/mine`,
         tokenConfig(getState)
      );

      dispatch({ type: GET_MY_ORDERS_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_MY_ORDERS_FAIL });
   }
};
