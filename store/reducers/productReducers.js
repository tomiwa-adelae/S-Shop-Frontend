import {
   CREATE_PRODUCT_REVIEW_FAIL,
   CREATE_PRODUCT_REVIEW_REQUEST,
   CREATE_PRODUCT_REVIEW_RESET,
   CREATE_PRODUCT_REVIEW_SUCCESS,
   GET_ALL_PRODUCTS_FROM_BRAND_FAIL,
   GET_ALL_PRODUCTS_FROM_BRAND_REQUEST,
   GET_ALL_PRODUCTS_FROM_BRAND_SUCCESS,
   GET_LATEST_PRODUCTS_FAIL,
   GET_LATEST_PRODUCTS_REQUEST,
   GET_LATEST_PRODUCTS_SUCCESS,
   GET_MOST_RATED_PRODUCTS_FAIL,
   GET_MOST_RATED_PRODUCTS_REQUEST,
   GET_MOST_RATED_PRODUCTS_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_FROM_BRAND_FAIL,
   GET_PRODUCTS_FROM_BRAND_REQUEST,
   GET_PRODUCTS_FROM_BRAND_SUCCESS,
   GET_PRODUCTS_FROM_CATEGORY_FAIL,
   GET_PRODUCTS_FROM_CATEGORY_REQUEST,
   GET_PRODUCTS_FROM_CATEGORY_SUCCESS,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_SINGLE_PRODUCT_FAIL,
   GET_SINGLE_PRODUCT_REQUEST,
   GET_SINGLE_PRODUCT_SUCCESS,
} from '../constants/productConstants';

// All products reducers
export const getProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_PRODUCTS_SUCCESS:
         return { loading: false, products: action.payload };
      case GET_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Latest products reducers
export const getLatestProductsReducer = (
   state = { latestProducts: [] },
   action
) => {
   switch (action.type) {
      case GET_LATEST_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_LATEST_PRODUCTS_SUCCESS:
         return { loading: false, latestProducts: action.payload };
      case GET_LATEST_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Most rated products reducers
export const getMostRatedProductsReducer = (
   state = { mostRatedProducts: [] },
   action
) => {
   switch (action.type) {
      case GET_MOST_RATED_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_MOST_RATED_PRODUCTS_SUCCESS:
         return { loading: false, mostRatedProducts: action.payload };
      case GET_MOST_RATED_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get single product reducers
export const getSingleProductReducer = (state = {}, action) => {
   switch (action.type) {
      case GET_SINGLE_PRODUCT_REQUEST:
         return { loading: true };
      case GET_SINGLE_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload };
      case GET_SINGLE_PRODUCT_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get products from brand reducers
export const getProductsBrandReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_FROM_BRAND_REQUEST:
         return { loading: true };
      case GET_PRODUCTS_FROM_BRAND_SUCCESS:
         return { loading: false, brandProducts: action.payload };
      case GET_PRODUCTS_FROM_BRAND_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get all products from brand reducers
export const getAllProductsBrandReducer = (
   state = { products: [] },
   action
) => {
   switch (action.type) {
      case GET_ALL_PRODUCTS_FROM_BRAND_REQUEST:
         return { loading: true };
      case GET_ALL_PRODUCTS_FROM_BRAND_SUCCESS:
         return { loading: false, brandProducts: action.payload };
      case GET_ALL_PRODUCTS_FROM_BRAND_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get products from category reducers
export const getProductsCategoryReducer = (
   state = { products: [] },
   action
) => {
   switch (action.type) {
      case GET_PRODUCTS_FROM_CATEGORY_REQUEST:
         return { loading: true };
      case GET_PRODUCTS_FROM_CATEGORY_SUCCESS:
         return { loading: false, categoryProducts: action.payload };
      case GET_PRODUCTS_FROM_CATEGORY_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get single product reducers
export const createProductReducer = (state = { products: {} }, action) => {
   switch (action.type) {
      case CREATE_PRODUCT_REVIEW_REQUEST:
         return { loading: true };
      case CREATE_PRODUCT_REVIEW_SUCCESS:
         return { loading: false, success: true };
      case CREATE_PRODUCT_REVIEW_FAIL:
         return { loading: false };
      case CREATE_PRODUCT_REVIEW_RESET:
         return {};
      default:
         return state;
   }
};
