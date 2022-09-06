import {
   ADMIN_ORDER_DETAILS_FAIL,
   ADMIN_ORDER_DETAILS_REQUEST,
   ADMIN_ORDER_DETAILS_RESET,
   ADMIN_ORDER_DETAILS_SUCCESS,
   ADMIN_PAY_ORDER_FAIL,
   ADMIN_PAY_ORDER_REQUEST,
   ADMIN_PAY_ORDER_RESET,
   ADMIN_PAY_ORDER_SUCCESS,
   ADMIN_DELIVER_ORDER_FAIL,
   ADMIN_DELIVER_ORDER_REQUEST,
   ADMIN_DELIVER_ORDER_RESET,
   ADMIN_DELIVER_ORDER_SUCCESS,
   GET_ADMIN_ORDERS_FAIL,
   GET_ADMIN_ORDERS_REQUEST,
   GET_ADMIN_ORDERS_RESET,
   GET_ADMIN_ORDERS_SUCCESS,
} from '../constants/sellerOrderConstants';

// Get my orders list
export const getAdminOrdersListReducer = (state = { orders: [] }, action) => {
   switch (action.type) {
      case GET_ADMIN_ORDERS_REQUEST:
         return { loading: true };
      case GET_ADMIN_ORDERS_SUCCESS:
         return {
            loading: false,
            orders: action.payload,
         };
      case GET_ADMIN_ORDERS_RESET:
         return { loading: false };
      case GET_ADMIN_ORDERS_FAIL:
         return {};
      default:
         return state;
   }
};

// Get order details
export const adminOrderDetailsReducer = (
   state = { orderItems: [] },
   action
) => {
   switch (action.type) {
      case ADMIN_ORDER_DETAILS_REQUEST:
         return { loading: true };
      case ADMIN_ORDER_DETAILS_SUCCESS:
         return {
            loading: false,
            order: action.payload.order,
            orderUser: action.payload.orderUser,
            orderItems: action.payload.order.orderItems,
         };
      case ADMIN_ORDER_DETAILS_FAIL:
         return { loading: false };
      case ADMIN_ORDER_DETAILS_RESET:
         return {};
      default:
         return state;
   }
};

// Mark order as paid
export const adminPayOrderReducer = (state = {}, action) => {
   switch (action.type) {
      case ADMIN_PAY_ORDER_REQUEST:
         return { loading: true };
      case ADMIN_PAY_ORDER_SUCCESS:
         return {
            loading: false,
         };
      case ADMIN_PAY_ORDER_FAIL:
         return { loading: false };
      case ADMIN_PAY_ORDER_RESET:
         return {};
      default:
         return state;
   }
};

// Mark order as delivered
export const adminDeliverOrderReducer = (state = {}, action) => {
   switch (action.type) {
      case ADMIN_DELIVER_ORDER_REQUEST:
         return { loadingDeliver: true };
      case ADMIN_DELIVER_ORDER_SUCCESS:
         return {
            loadingDeliver: false,
         };
      case ADMIN_DELIVER_ORDER_FAIL:
         return { loadingDeliver: false };
      case ADMIN_DELIVER_ORDER_RESET:
         return {};
      default:
         return state;
   }
};
