import React from 'react';
import { useSelector } from 'react-redux';

const ConfirmOrderCheckOut = () => {
   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;

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
               //    onClick={checkOutHandler}
               className="btn btn-primary"
            >
               Checkout now{' '}
               <span>
                  #{' '}
                  {cartItems.reduce(
                     (acc, item) => acc + item.qty * item.price,
                     0
                  )}
               </span>
            </button>
         </div>
      </div>
   );
};

export default ConfirmOrderCheckOut;
