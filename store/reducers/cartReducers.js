import {
   ADD_TO_CART,
   REMOVE_FROM_CART,
   SAVE_CART_FAIL,
   SAVE_CART_REQUEST,
   SAVE_CART_SUCCESS,
} from '../constants/cartConstants';

export const cartReducer = (
   state = { cartItems: [], shippingAddress: {}, paymentMethod: null },
   action
) => {
   switch (action.type) {
      case ADD_TO_CART:
         const item = action.payload;

         const existItem = state.cartItems.find((x) => x.id === item.id);

         if (existItem) {
            return {
               ...state,
               cartItems: state.cartItems.map((x) =>
                  x.id === existItem.id ? item : x
               ),
               success: true,
            };
         } else {
            return {
               ...state,
               cartItems: [...state.cartItems, item],
               success: true,
            };
         }
      case REMOVE_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.id !== action.payload),
         };
      //    case CART_SAVE_SHIPPING_ADDRESS:
      //       return {
      //          ...state,
      //          shippingAddress: action.payload,
      //       };
      //    case CART_SAVE_PAYMENT_METHOD:
      //       return {
      //          ...state,
      //          paymentMethod: action.payload,
      //       };
      //    case CART_CLEAR_ITEMS:
      //       return {
      //          ...state,
      //          cartItems: [],
      //       };
      default:
         return state;
   }
};

export const saveCartReducer = (state = { loading: true }, action) => {
   switch (action.type) {
      case SAVE_CART_REQUEST:
         return { loading: true };
      case SAVE_CART_SUCCESS:
         return { loading: false, cartItems: action.payload };
      case SAVE_CART_FAIL:
         return { loading: false };
      default:
         return state;
   }
};
