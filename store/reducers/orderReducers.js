import {
   CREATE_ORDER_FAIL,
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_RESET,
   CREATE_ORDER_SUCCESS,
} from '../constants/orderConstants';

export const createOrderReducer = (state = { orderItems: [] }, action) => {
   switch (action.type) {
      case CREATE_ORDER_REQUEST:
         return { loading: true };
      case CREATE_ORDER_SUCCESS:
         return {
            loading: false,
            success: true,
            order: action.payload.order,
            orderUser: action.payload.orderUser,
            orderItems: action.payload.order.orderItems,
         };
      case CREATE_ORDER_FAIL:
         return { loading: false };
      case CREATE_ORDER_RESET:
         return {};
      default:
         return state;
   }
};
