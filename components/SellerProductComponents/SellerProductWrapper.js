import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerProduct } from '../../store/actions/sellerProductsActions';
import { SELLER_UPDATE_PRODUCT_RESET } from '../../store/constants/sellerProductConstants';
import BackBtn from '../BackBtn';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import SellerProductDescription from './SellerProductDescription';
import SellerProductReview from './SellerProductReview';
import SellerProductShowcase from './SellerProductShowcase';

const SellerProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const getSellerProductState = useSelector((state) => state.getSellerProduct);
   const { loading, product } = getSellerProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch({ type: SELLER_UPDATE_PRODUCT_RESET });
      if (!seller) {
         router.push(`/loginseller?redirect=sellerproduct/${router.query.id}`);
      }

      dispatch(getSellerProduct(router.query.id));
   }, [dispatch, seller, router]);

   return (
      <div className="seller-product-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg ? (
            <>
               <BackBtn to="sellerproducts" />
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            product && (
               <>
                  <BackBtn to="sellerproducts" />
                  <SellerProductShowcase product={product} />
                  <SellerProductDescription product={product} />
                  <SellerProductReview product={product} />
               </>
            )
         )}
      </div>
   );
};

export default SellerProductWrapper;
