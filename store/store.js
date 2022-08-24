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

// All reduers
const reducer = combineReducers({
   error: errorReducer,
   getProducts: getProductsReducer,
   getLatestProducts: getLatestProductsReducer,
   getMostRatedProducts: getMostRatedProductsReducer,
   getProduct: getSingleProductReducer,
   getBrandProducts: getProductsBrandReducer,
});

// initial states here
const initalState = {};

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
