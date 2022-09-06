import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminSellerDetails } from '../../store/actions/userSellerActions';
import BackBtn from '../BackBtn';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import AdminSellerDetailsShowcase from './AdminSellerDetailsShowcase';

const AdminSellerDetailsWrapper = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const adminSellerDetailsState = useSelector(
      (state) => state.adminSellerDetails
   );
   const { sellerObj, loading } = adminSellerDetailsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller?.isAdmin) {
         router.push('/loginseller?redirect=adminsellers');
      }
      dispatch(getAdminSellerDetails(router.query.id));
   }, [dispatch, seller, router]);

   return (
      <div>
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
            sellerObj && (
               <>
                  <AdminSellerDetailsShowcase seller={sellerObj} />
               </>
            )
         )}
      </div>
   );
};

export default AdminSellerDetailsWrapper;
