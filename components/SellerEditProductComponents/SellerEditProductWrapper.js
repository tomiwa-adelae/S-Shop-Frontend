import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerProduct } from '../../store/actions/sellerProductsActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import SellerEditProductForm from './SellerEditProductForm';

const SellerEditProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const getSellerProductState = useSelector((state) => state.getSellerProduct);
   const { loading, product } = getSellerProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller) {
         router.push('/loginseller');
      }

      dispatch(getSellerProduct(router.query.id));
   }, [dispatch, seller, router]);

   return (
      <div className="seller-product-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : (
            product && (
               <>
                  <SellerEditProductForm productDetails={product} />
               </>
            )
         )}
      </div>
   );
};

export default SellerEditProductWrapper;
