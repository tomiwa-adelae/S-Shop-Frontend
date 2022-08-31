import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import {
   createProductReducer,
   getAllProductsBrandReducer,
   getLatestProductsReducer,
   getMostRatedProductsReducer,
   getProductsBrandReducer,
   getProductsCategoryReducer,
   getProductsReducer,
   getSingleProductReducer,
} from './reducers/productReducers';
import errorReducer from './reducers/errorReducers';
import { cartReducer, saveCartReducer } from './reducers/cartReducers';
import {
   changeLoginReducer,
   loginUserReducer,
   registerUserReducer,
   updateUserProfileReducer,
} from './reducers/userReducers';
import {
   savePaymentMethodReducer,
   saveSchoolShippingReducer,
   saveUserShippingDetailsReducer,
} from './reducers/shippingReducers';
import {
   createOrderReducer,
   getMyOrdersListReducer,
   getOrderSimilarProductsReducer,
   orderDetailsReducer,
} from './reducers/orderReducers';

// All reduers
const reducer = combineReducers({
   error: errorReducer,
   getProducts: getProductsReducer,
   getLatestProducts: getLatestProductsReducer,
   getMostRatedProducts: getMostRatedProductsReducer,
   getProduct: getSingleProductReducer,
   getBrandProducts: getProductsBrandReducer,
   getAllBrandProducts: getAllProductsBrandReducer,
   getCategoryProducts: getProductsCategoryReducer,
   saveCart: saveCartReducer,
   cart: cartReducer,
   login: loginUserReducer,
   register: registerUserReducer,
   schoolShipping: saveSchoolShippingReducer,
   userShippingDetails: saveUserShippingDetailsReducer,
   paymentMethod: savePaymentMethodReducer,
   createOrder: createOrderReducer,
   orderDetails: orderDetailsReducer,
   orderSimilarProducts: getOrderSimilarProductsReducer,
   getMyOrders: getMyOrdersListReducer,
   updateUserProfile: updateUserProfileReducer,
   changeLogin: changeLoginReducer,
   createReview: createProductReducer,
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
   register: { user: userData, token: userToken },
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
