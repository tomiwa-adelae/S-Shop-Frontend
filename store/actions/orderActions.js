import axios from 'axios';
import {
   CREATE_ORDER_FAIL,
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_RESET,
   CREATE_ORDER_SUCCESS,
} from '../constants/orderConstants';
import { returnErrors } from './errorActions';
import { server } from '../../config/server';
import { CLEAR_CART_ITEMS } from '../constants/cartConstants';

export const createOrder = () => async (dispatch, getState) => {
   try {
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

      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const { data } = await axios.post(
         `${server}/api/orders`,
         orderDetails,
         config
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
