import axios from 'axios';
import {
   ADD_TO_CART_FAIL,
   ADD_TO_CART,
   REMOVE_FROM_CART_FAIL,
   REMOVE_FROM_CART,
} from '../constants/cartConstants';
import { returnErrors } from './errorActions';
import { server } from '../../config/server';

// Get products details for cartItems
export const addToCart = (id, size, qty) => async (dispatch, getState) => {
   try {
      const { data } = await axios.get(`${server}/api/products/${id}`);
      dispatch({
         type: ADD_TO_CART,
         payload: {
            id: data._id,
            name: data.name,
            productImage: data.productImage,
            price: data.price,
            brand: data.brand,
            category: data.category,
            size,
            qty,
         },
      });

      localStorage.setItem(
         'cartItems',
         JSON.stringify(getState().cart.cartItems)
      );
   } catch (err) {
      console.log(err);
      // dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: ADD_TO_CART_FAIL });
   }
};

// Remove from cart
export const removeFromCart = (id) => async (dispatch, getState) => {
   try {
      dispatch({
         type: REMOVE_FROM_CART,
         payload: id,
      });

      localStorage.setItem(
         'cartItems',
         JSON.stringify(getState().cart.cartItems)
      );
   } catch (err) {
      // console.log(err);
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: REMOVE_FROM_CART_FAIL });
   }
};
