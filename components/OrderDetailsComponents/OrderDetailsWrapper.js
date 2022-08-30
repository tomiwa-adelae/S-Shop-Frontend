import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../store/actions/orderActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import OrderDetailsCarousel from './OrderDetailsCarousel';
import OrderDetailsInfo from './OrderDetailsInfo';
import OrderDetailsIntro from './OrderDetailsIntro';
import OrderDetailsItems from './OrderDetailsItems';

const OrderDetailsWrapper = () => {
   const router = useRouter();

   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const orderDetailsState = useSelector((state) => state.orderDetails);
   const { order, orderItems, loading, orderUser } = orderDetailsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push(`/login?redirect=myorders`);
      }

      if (router.query.id) {
         dispatch(getOrderDetails(router.query.id));
      }
   }, [dispatch, router, user]);
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
                     <OrderDetailsCarousel orderItems={orderItems} />
                     <OrderDetailsIntro />
                     <OrderDetailsItems
                        orderDetails={order}
                        orderUser={orderUser}
                     />
                     <OrderDetailsInfo order={order} />
                  </>
               )
            )}
         </>
      </div>
   );
};

export default OrderDetailsWrapper;
