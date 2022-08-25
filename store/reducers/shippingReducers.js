import {
   SAVE_PAYMENT_METHOD,
   SAVE_SCHOOL_SHIPPING,
   SAVE_USER_SHIPPING_DETAILS,
} from '../constants/shippingConstants';

export const saveSchoolShippingReducer = (state = {}, action) => {
   switch (action.type) {
      case SAVE_SCHOOL_SHIPPING:
         return { location: action.payload };
      default:
         return state;
   }
};

export const saveUserShippingDetailsReducer = (state = {}, action) => {
   switch (action.type) {
      case SAVE_USER_SHIPPING_DETAILS:
         return { userShippingDetails: action.payload };
      default:
         return state;
   }
};

export const savePaymentMethodReducer = (state = {}, action) => {
   switch (action.type) {
      case SAVE_PAYMENT_METHOD:
         return { paymentMethod: action.payload };
      default:
         return state;
   }
};
