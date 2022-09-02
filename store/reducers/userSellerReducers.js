import { USER_LOGOUT } from '../constants/userConstants';
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

// Register new seller reducer
export const registerSellerReducer = (state = {}, action) => {
   switch (action.type) {
      case REGISTER_SELLER_USER_REQUEST:
         return { loading: true };
      case REGISTER_SELLER_USER_SUCCESS:
         return {
            loading: false,
            seller: action.payload.seller,
            sellerToken: action.payload.token,
         };
      case REGISTER_SELLER_USER_FAIL:
         return { loading: false, seller: null, token: null };
      case ADMIN_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Register new seller reducer
export const loginSellerReducer = (state = {}, action) => {
   switch (action.type) {
      case LOGIN_SELLER_USER_REQUEST:
         return { loading: true };
      case LOGIN_SELLER_USER_SUCCESS:
         return {
            loading: false,
            seller: action.payload.seller,
            sellerToken: action.payload.token,
         };
      case LOGIN_SELLER_USER_FAIL:
         return { loading: false, seller: null, token: null };
      case ADMIN_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Update profile reducer
export const updateSellerUserProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case UPDATE_SELLER_USER_REQUEST:
         return { loading: true };
      case UPDATE_SELLER_USER_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case UPDATE_SELLER_USER_FAIL:
         return { loading: false, user: null, success: false };
      case UPDATE_SELLER_USER_RESET:
         return {};
      case ADMIN_LOGOUT:
         return { loading: false, user: null };
      default:
         return state;
   }
};
