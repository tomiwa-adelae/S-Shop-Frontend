import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   getProductsFromBrand,
   getSingleProduct,
} from '../../store/actions/productActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import ProductDescription from './ProductDescription';
import ProductMoreProductFromBrand from './ProductMoreProductFromBrand';
import ProductReview from './ProductReview';
import ProductShowcase from './ProductShowcase';
import SimilarProducts from './SimilarProducts';

const ProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const productState = useSelector((state) => state.getProduct);
   const { loading, product } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (router.query.id) {
         dispatch(getSingleProduct(router.query.id));
      }
   }, [dispatch, router]);

   return (
      <div className="product-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg === 'Product not found!' ? (
            <>
               <div className="container section-small">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            product && (
               <>
                  <ProductShowcase product={product} />
                  <ProductDescription product={product} />
                  <ProductMoreProductFromBrand product={product} />
                  <ProductReview product={product} />
                  <SimilarProducts product={product} />
               </>
            )
         )}
      </div>
   );
};

export default ProductWrapper;
