import {
   CREATE_ORDER_FAIL,
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_RESET,
   CREATE_ORDER_SUCCESS,
   ORDER_DETAILS_FAIL,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_RESET,
   ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants';

export const orderDetailsReducer = (state = { orderItems: [] }, action) => {
   switch (action.type) {
      case ORDER_DETAILS_REQUEST:
         return { loading: true };
      case ORDER_DETAILS_SUCCESS:
         return {
            loading: false,
            order: action.payload.order,
            orderUser: action.payload.orderUser,
            orderItems: action.payload.order.orderItems,
         };
      case ORDER_DETAILS_FAIL:
         return { loading: false };
      case ORDER_DETAILS_RESET:
         return {};
      default:
         return state;
   }
};

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
