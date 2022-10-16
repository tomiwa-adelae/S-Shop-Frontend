import {
   CREATE_ORDER_FAIL,
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_RESET,
   CREATE_ORDER_SUCCESS,
   GET_MY_ORDERS_FAIL,
   GET_MY_ORDERS_REQUEST,
   GET_MY_ORDERS_RESET,
   GET_MY_ORDERS_SUCCESS,
   ORDER_DETAILS_FAIL,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_RESET,
   ORDER_DETAILS_SUCCESS,
   ORDER_SIMILAR_PRODUCT_FAIL,
   ORDER_SIMILAR_PRODUCT_REQUEST,
   ORDER_SIMILAR_PRODUCT_RESET,
   ORDER_SIMILAR_PRODUCT_SUCCESS,
   PAY_WITH_CARD_FAIL,
   PAY_WITH_CARD_REQUEST,
   PAY_WITH_CARD_RESET,
   PAY_WITH_CARD_SUCCESS,
} from '../constants/orderConstants';

// Get order details
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

// Get similar orders product
export const getOrderSimilarProductsReducer = (
   state = { products: [] },
   action
) => {
   switch (action.type) {
      case ORDER_SIMILAR_PRODUCT_REQUEST:
         return { loading: true };
      case ORDER_SIMILAR_PRODUCT_SUCCESS:
         return {
            loading: false,
            products: action.payload,
         };
      case ORDER_SIMILAR_PRODUCT_RESET:
         return { loading: false };
      case ORDER_SIMILAR_PRODUCT_FAIL:
         return {};
      default:
         return state;
   }
};

// Create new order
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

// Get my orders list
export const getMyOrdersListReducer = (state = { orders: [] }, action) => {
   switch (action.type) {
      case GET_MY_ORDERS_REQUEST:
         return { loading: true };
      case GET_MY_ORDERS_SUCCESS:
         return {
            loading: false,
            orders: action.payload,
         };
      case GET_MY_ORDERS_RESET:
         return { loading: false };
      case GET_MY_ORDERS_FAIL:
         return {};
      default:
         return state;
   }
};

// Get order details
export const payCardReducer = (state = {}, action) => {
   switch (action.type) {
      case PAY_WITH_CARD_REQUEST:
         return { loading: true, succes: false };
      case PAY_WITH_CARD_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case PAY_WITH_CARD_FAIL:
         return { loading: false, success: false };
      case PAY_WITH_CARD_RESET:
         return {};
      default:
         return state;
   }
};
