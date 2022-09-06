import React from 'react';
import { HelpOrdering } from '../components/Help';
import PaymentForm from '../components/PaymentPageComponents/PaymentForm';
import PaymentHead from '../components/PaymentPageComponents/PaymentHead';

const payment = () => {
   return (
      <div className="payment-page">
         <HelpOrdering />
         <div className="container section">
            <PaymentHead />
            <PaymentForm />
         </div>
      </div>
   );
};

export default payment;
