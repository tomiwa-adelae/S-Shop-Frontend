import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   getMostRatedProducts,
   getProducts,
} from '../../store/actions/productActions';
import HomeCategories from './HomeCategories';
import HomeLatestProducts from './HomeLatestProducts';
import HomePopularProducts from './HomePopularProducts';
import HomeProductCarousel from './HomeProductCarousel';

const HomeWrapper = () => {
   const dispatch = useDispatch();

   const mostRatedProductsState = useSelector(
      (state) => state.getMostRatedProducts
   );
   const { loading, mostRatedProducts } = mostRatedProductsState;

   const productsState = useSelector((state) => state.getProducts);
   const { loadingLatest = loading, products } = productsState;

   useEffect(() => {
      dispatch(getMostRatedProducts());
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <div className="home-wrapper">
         <HomeProductCarousel
            loading={loading}
            mostRatedProducts={mostRatedProducts}
         />
         <HomeCategories />
         <HomePopularProducts
            loading={loading}
            mostRatedProducts={mostRatedProducts}
         />
         <HomeLatestProducts
            loading={loadingLatest}
            latestProducts={products}
         />
         <HomeCategories />
      </div>
   );
};

export default HomeWrapper;
