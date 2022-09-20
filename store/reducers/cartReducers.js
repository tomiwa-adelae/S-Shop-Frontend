import {
   ADD_TO_CART,
   CLEAR_CART_ITEMS,
   REMOVE_FROM_CART,
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
      case CLEAR_CART_ITEMS:
         return {
            ...state,
            cartItems: [],
         };
      default:
         return state;
   }
};
