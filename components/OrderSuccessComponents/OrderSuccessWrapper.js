import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../store/actions/orderActions';
import { CREATE_ORDER_RESET } from '../../store/constants/orderConstants';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import OrderSimilarProducts from './OrderSimilarProducts';
import OrderSuccessCarousel from './OrderSuccessCarousel';
import OrderSuccessDetails from './OrderSuccessDetails';

const OrderSuccessWrapper = () => {
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
         dispatch({ type: CREATE_ORDER_RESET });
      }
   }, [dispatch, router, user]);

   return (
      <div className="order-success-wrapper">
         <>
            <div className="container">
               {msg && <ErrorMessageBox msg={msg} />}
            </div>
            {loading ? (
               <PrimarySpinner />
            ) : (
               order && (
                  <>
                     <OrderSuccessCarousel orderItems={orderItems} />
                     <OrderSuccessDetails order={order} orderUser={orderUser} />
                     <OrderSimilarProducts product={order.orderItems[0]} />
                  </>
               )
            )}
         </>
      </div>
   );
};

export default OrderSuccessWrapper;
