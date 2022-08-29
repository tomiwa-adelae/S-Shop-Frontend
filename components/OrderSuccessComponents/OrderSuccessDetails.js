import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../store/actions/orderActions';
import { CREATE_ORDER_RESET } from '../../store/constants/orderConstants';

const OrderSuccessDetails = () => {
   const router = useRouter();

   const dispatch = useDispatch();

   const orderDetailsState = useSelector((state) => state.orderDetails);
   const { order, orderUser } = orderDetailsState;

   useEffect(() => {
      if (router.query.id) {
         dispatch(getOrderDetails(router.query.id));
      }
   }, [dispatch, router]);

   // const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch({ type: CREATE_ORDER_RESET });
   // }, [dispatch]);

   return (
      <div className="order-success-details section">
         <div className="container">
            <div className="head py-1">
               <h4>Order Success</h4>
            </div>

            <p>
               Dear {order && orderUser?.firstName}, your order has been
               successfully placed and will be processed as soon as possible.
               S-Shop will get back to you within the next 24 hours
            </p>

            <div className="btns my-1">
               {order && order.paymentMethod === 'Pay with Cards' && (
                  <button className="btn btn-grey">Proceed to Payment</button>
               )}
               <Link
                  href="/order/[id]"
                  as={`/order/${order && order.order?._id}`}
               >
                  <button className="btn btn-grey">View order details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OrderSuccessDetails;
