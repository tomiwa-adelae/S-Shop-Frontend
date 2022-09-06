import {
   ADMIN_GET_SELLERS_FAIL,
   ADMIN_GET_SELLERS_REQUEST,
   ADMIN_GET_SELLERS_SUCCESS,
   ADMIN_GET_USERS_FAIL,
   ADMIN_GET_USERS_REQUEST,
   ADMIN_GET_USERS_SUCCESS,
   ADMIN_LOGOUT,
   ADMIN_SELLER_DETAILS_FAIL,
   ADMIN_SELLER_DETAILS_REQUEST,
   ADMIN_SELLER_DETAILS_RESET,
   ADMIN_SELLER_DETAILS_SUCCESS,
   CHANGE_SELLER_LOGIN_FAIL,
   CHANGE_SELLER_LOGIN_REQUEST,
   CHANGE_SELLER_LOGIN_SUCCESS,
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
         return { loading: false, seller: null, success: false };
      case UPDATE_SELLER_USER_RESET:
         return {};
      case ADMIN_LOGOUT:
         return { loading: false, seller: null };
      default:
         return state;
   }
};

// Change user login reducer
export const changeSellerLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case CHANGE_SELLER_LOGIN_REQUEST:
         return { loading: true };
      case CHANGE_SELLER_LOGIN_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case CHANGE_SELLER_LOGIN_FAIL:
         return { loading: false, seller: null, success: false };
      case ADMIN_LOGOUT:
         return { loading: false, seller: null };
      default:
         return state;
   }
};

// Get all users as an admin
export const adminGetUsersReducer = (state = { users: [] }, action) => {
   switch (action.type) {
      case ADMIN_GET_USERS_REQUEST:
         return { loading: true };
      case ADMIN_GET_USERS_SUCCESS:
         return {
            loading: false,
            users: action.payload,
         };
      case ADMIN_GET_USERS_FAIL:
         return { loading: false };
      case ADMIN_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Get all sellers as an admin
export const adminGetSellersReducer = (state = { sellers: [] }, action) => {
   switch (action.type) {
      case ADMIN_GET_SELLERS_REQUEST:
         return { loading: true };
      case ADMIN_GET_SELLERS_SUCCESS:
         return {
            loading: false,
            sellers: action.payload,
         };
      case ADMIN_GET_SELLERS_FAIL:
         return { loading: false };
      case ADMIN_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Get order details
export const adminSellerDetailsReducer = (state = {}, action) => {
   switch (action.type) {
      case ADMIN_SELLER_DETAILS_REQUEST:
         return { loading: true };
      case ADMIN_SELLER_DETAILS_SUCCESS:
         return {
            loading: false,
            sellerObj: action.payload,
         };
      case ADMIN_SELLER_DETAILS_FAIL:
         return { loading: false };
      case ADMIN_SELLER_DETAILS_RESET:
         return {};
      default:
         return state;
   }
};
