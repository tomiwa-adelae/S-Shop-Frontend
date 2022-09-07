import React from 'react';
import BackBtn from '../BackBtn';

const PaymentHead = () => {
   return (
      <div className="payment-head">
         <h3>Method of payment</h3>

         <p className="lead my-1">Choose a method of payment for your orders</p>

         <BackBtn to="/orderlocation" />
      </div>
   );
};

export default PaymentHead;
