import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';
import { useRouter } from 'next/router';
import { SmallWhiteSpinner } from '../Spinner';

const ConfirmOrderCheckOut = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;

   const createOrderState = useSelector((state) => state.createOrder);
   const { success, loading, order } = createOrderState;

   useEffect(() => {
      if (success) {
         router.push(`/ordersuccess/${order._id}`);
      }
   }, [success, router]);
   const placeorderHandler = () => {
      dispatch(createOrder());
   };

   return (
      <div className="confirm-order-checkout p-1 my-1">
         <div className="head">
            <h4>
               Total
               <span>
                  ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                  items
               </span>
            </h4>
         </div>
         <div className="checkout-btn my-1">
            <button
               disabled={cartItems.length === 0}
               onClick={placeorderHandler}
               className="btn btn-primary"
            >
               {loading ? (
                  <SmallWhiteSpinner />
               ) : (
                  `Checkout now ${' '}
                  #${' '}
                  ${cartItems.reduce(
                     (acc, item) => acc + item.qty * item.price,
                     0
                  )}
               `
               )}{' '}
            </button>
         </div>
      </div>
   );
};

export default ConfirmOrderCheckOut;
