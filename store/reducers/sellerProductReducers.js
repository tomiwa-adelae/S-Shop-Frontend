import {
   GET_SELLER_PRODUCTS_FAIL,
   GET_SELLER_PRODUCTS_REQUEST,
   GET_SELLER_PRODUCTS_SUCCESS,
   GET_SELLER_PRODUCT_FAIL,
   GET_SELLER_PRODUCT_REQUEST,
   GET_SELLER_PRODUCT_SUCCESS,
   SELLER_CREATE_PRODUCT_FAIL,
   SELLER_CREATE_PRODUCT_REQUEST,
   SELLER_CREATE_PRODUCT_RESET,
   SELLER_CREATE_PRODUCT_SUCCESS,
   SELLER_DELETE_PRODUCT_FAIL,
   SELLER_DELETE_PRODUCT_REQUEST,
   SELLER_DELETE_PRODUCT_RESET,
   SELLER_DELETE_PRODUCT_SUCCESS,
   SELLER_UPDATE_PRODUCT_FAIL,
   SELLER_UPDATE_PRODUCT_REQUEST,
   SELLER_UPDATE_PRODUCT_RESET,
   SELLER_UPDATE_PRODUCT_SUCCESS,
} from '../constants/sellerProductConstants';

// Get seller products reducer
export const getSellerProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_SELLER_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_SELLER_PRODUCTS_SUCCESS:
         return { loading: false, products: action.payload };
      case GET_SELLER_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get seller products reducer
export const getSellerProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case GET_SELLER_PRODUCT_REQUEST:
         return { loading: true };
      case GET_SELLER_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload };
      case GET_SELLER_PRODUCT_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get seller products reducer
export const sellerCreateProductsReducer = (
   state = { product: {} },
   action
) => {
   switch (action.type) {
      case SELLER_CREATE_PRODUCT_REQUEST:
         return { loading: true };
      case SELLER_CREATE_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload };
      case SELLER_CREATE_PRODUCT_FAIL:
         return { loading: false };
      case SELLER_CREATE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};

// Update a product by a seller reducer
export const sellerUpdateProductsReducer = (
   state = { product: {} },
   action
) => {
   switch (action.type) {
      case SELLER_UPDATE_PRODUCT_REQUEST:
         return { loading: true };
      case SELLER_UPDATE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case SELLER_UPDATE_PRODUCT_FAIL:
         return { loading: false };
      case SELLER_UPDATE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};

// Get seller products reducer
export const sellerDeleteProductReducer = (state = {}, action) => {
   switch (action.type) {
      case SELLER_DELETE_PRODUCT_REQUEST:
         return { loading: true };
      case SELLER_DELETE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case SELLER_DELETE_PRODUCT_FAIL:
         return { loading: false };
      case SELLER_DELETE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};
