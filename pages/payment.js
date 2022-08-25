import React from 'react';
import PaymentForm from '../components/PaymentPageComponents/PaymentForm';
import PaymentHead from '../components/PaymentPageComponents/PaymentHead';

const payment = () => {
   return (
      <div className="payment-page">
         <div className="container section">
            <PaymentHead />
            <PaymentForm />
         </div>
      </div>
   );
};

export default payment;
