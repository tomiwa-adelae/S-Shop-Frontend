import {
   LOGIN_USER_FAIL,
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
   USER_LOGOUT,
} from '../constants/userConstants';

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
         return { loading: false, user: null };
      case USER_LOGOUT:
         return { loading: false, user: null };
      default:
         return state;
   }
};
