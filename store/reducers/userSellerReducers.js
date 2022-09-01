import { USER_LOGOUT } from '../constants/userConstants';
import {
   ADMIN_LOGOUT,
   LOGIN_SELLER_USER_FAIL,
   LOGIN_SELLER_USER_REQUEST,
   LOGIN_SELLER_USER_SUCCESS,
   REGISTER_SELLER_USER_FAIL,
   REGISTER_SELLER_USER_REQUEST,
   REGISTER_SELLER_USER_SUCCESS,
} from '../constants/userSellerConstants';

// Register new seller reducer
export const registerSellerReducer = (state = {}, action) => {
   switch (action.type) {
      case REGISTER_SELLER_USER_REQUEST:
         return { loading: true };
      case REGISTER_SELLER_USER_SUCCESS:
         return {
            loading: false,
            user: action.payload.seller,
            token: action.payload.token,
         };
      case REGISTER_SELLER_USER_FAIL:
         return { loading: false, user: null, token: null };
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
            user: action.payload.seller,
            token: action.payload.token,
         };
      case LOGIN_SELLER_USER_FAIL:
         return { loading: false, user: null, token: null };
      case ADMIN_LOGOUT:
         return {};
      default:
         return state;
   }
};
