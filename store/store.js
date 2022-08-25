import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import {
   getLatestProductsReducer,
   getMostRatedProductsReducer,
   getProductsBrandReducer,
   getProductsReducer,
   getSingleProductReducer,
} from './reducers/productReducers';
import errorReducer from './reducers/errorReducers';
import { cartReducer, saveCartReducer } from './reducers/cartReducers';
import { useEffect } from 'react';
import { loginUserReducer } from './reducers/userReducers';
import {
   savePaymentMethodReducer,
   saveSchoolShippingReducer,
   saveUserShippingDetailsReducer,
} from './reducers/shippingReducers';

// All reduers
const reducer = combineReducers({
   error: errorReducer,
   getProducts: getProductsReducer,
   getLatestProducts: getLatestProductsReducer,
   getMostRatedProducts: getMostRatedProductsReducer,
   getProduct: getSingleProductReducer,
   getBrandProducts: getProductsBrandReducer,
   saveCart: saveCartReducer,
   cart: cartReducer,
   login: loginUserReducer,
   schoolShipping: saveSchoolShippingReducer,
   userShippingDetails: saveUserShippingDetailsReducer,
   paymentMethod: savePaymentMethodReducer,
});

const schoolShippingData =
   typeof window !== 'undefined' && localStorage.getItem('schoolShipping')
      ? JSON.parse(localStorage.getItem('schoolShipping'))
      : null;

const userShippingDetailsData =
   typeof window !== 'undefined' && localStorage.getItem('userShippingDetails')
      ? JSON.parse(localStorage.getItem('userShippingDetails'))
      : null;

const paymentMethodData =
   typeof window !== 'undefined' && localStorage.getItem('savePaymentMethod')
      ? JSON.parse(localStorage.getItem('savePaymentMethod'))
      : null;

const userData =
   typeof window !== 'undefined' && localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;

const userToken =
   typeof window !== 'undefined' && localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null;

// initial states here
const initalState = {
   cart: { cartItems: [] },
   login: { user: userData, token: userToken },
   schoolShipping: { location: schoolShippingData },
   userShippingDetails: { userShippingDetails: userShippingDetailsData },
   paymentMethod: { paymentMethod: paymentMethodData },
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
   reducer,
   initalState,
   composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
