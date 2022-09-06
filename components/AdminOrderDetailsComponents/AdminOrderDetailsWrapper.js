import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminOrderDetails } from '../../store/actions/sellerOrderActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import AdminOrderDetailsCarousel from './AdminOrderDetailsCarousel';
import AdminOrderDetailsInfo from './AdminOrderDetailsInfo';
import AdminOrderDetailsIntro from './AdminOrderDetailsIntro';
import AdminOrderDetailsItems from './AdminOrderDetailsItems';

const AdminOrderDetailsWrapper = () => {
   const router = useRouter();

   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const adminOrderDetailsState = useSelector(
      (state) => state.adminOrderDetails
   );
   const { order, orderItems, loading, orderUser } = adminOrderDetailsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller?.isAdmin) {
         router.push('/loginseller?redirect=adminorders');
      }

      if (router.query.id) {
         dispatch(getAdminOrderDetails(router.query.id));
      }
   }, [dispatch, router, seller]);
   return (
      <div>
         <>
            <div className="container">
               {msg && <ErrorMessageBox msg={msg} />}
            </div>
            {loading ? (
               <PrimarySpinner />
            ) : (
               order && (
                  <>
                     <AdminOrderDetailsCarousel orderItems={orderItems} />
                     <AdminOrderDetailsIntro />
                     <AdminOrderDetailsItems
                        orderDetails={order}
                        orderUser={orderUser}
                     />
                     <AdminOrderDetailsInfo
                        order={order}
                        orderUser={orderUser}
                     />
                  </>
               )
            )}
         </>
      </div>
   );
};

export default AdminOrderDetailsWrapper;
