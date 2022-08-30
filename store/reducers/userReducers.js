import {
   CHANGE_USER_LOGIN_FAIL,
   CHANGE_USER_LOGIN_REQUEST,
   CHANGE_USER_LOGIN_SUCCESS,
   LOGIN_USER_FAIL,
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
   REGISTER_USER_FAIL,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   UPDATE_USER_FAIL,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   USER_LOGOUT,
} from '../constants/userConstants';

// Login reducer
export const loginUserReducer = (state = {}, action) => {
   switch (action.type) {
      case LOGIN_USER_REQUEST:
         return { loading: true };
      case LOGIN_USER_SUCCESS:
         return {
            loading: false,
            user: action.payload.user,
            token: action.payload.token,
         };
      case LOGIN_USER_FAIL:
         return { loading: false, user: null, token: null };
      case USER_LOGOUT:
         return { loading: false, user: null, token: null };
      default:
         return state;
   }
};

// Register Reducer
export const registerUserReducer = (state = {}, action) => {
   switch (action.type) {
      case REGISTER_USER_REQUEST:
         return { loading: true };
      case REGISTER_USER_SUCCESS:
         return {
            loading: false,
            user: action.payload.user,
            token: action.payload.token,
         };
      case REGISTER_USER_FAIL:
         return { loading: false, user: null, token: null };
      case USER_LOGOUT:
         return { loading: false, user: null, token: null };
      default:
         return state;
   }
};

// Update profile reducer
export const updateUserProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case UPDATE_USER_REQUEST:
         return { loading: true };
      case UPDATE_USER_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case UPDATE_USER_FAIL:
         return { loading: false, user: null, success: false };
      case USER_LOGOUT:
         return { loading: false, user: null };
      default:
         return state;
   }
};

// Change user login reducer
export const changeLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case CHANGE_USER_LOGIN_REQUEST:
         return { loading: true };
      case CHANGE_USER_LOGIN_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case CHANGE_USER_LOGIN_FAIL:
         return { loading: false, user: null, success: false };
      case USER_LOGOUT:
         return { loading: false, user: null };
      default:
         return state;
   }
};
