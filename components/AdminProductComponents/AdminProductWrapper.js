import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProduct } from '../../store/actions/sellerProductsActions';
import BackBtn from '../BackBtn';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import AdminProductDescription from './AdminProductDescription';
import AdminProductReview from './AdminProductReview';
import AdminProductShowcase from './AdminProductShowcase';

const AdminProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const getAdminProductState = useSelector((state) => state.getAdminProduct);
   const { loading, product } = getAdminProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller) {
         router.push(`/loginseller?redirect=sellerproduct/${router.query.id}`);
      }

      dispatch(getAdminProduct(router.query.id));
   }, [dispatch, seller, router]);

   return (
      <div className="admin-product-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg ? (
            <>
               <BackBtn to="adminproducts" />
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            product && (
               <>
                  <BackBtn to="adminproducts" />
                  <AdminProductShowcase product={product} />
                  <AdminProductDescription product={product} />
                  <AdminProductReview product={product} />
               </>
            )
         )}
      </div>
   );
};

export default AdminProductWrapper;
