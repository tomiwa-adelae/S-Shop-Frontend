import React from 'react';
import BackBtn from '../components/BackBtn';
import { HelpOrdering } from '../components/Help';
import Meta from '../components/Meta';
import PaymentForm from '../components/PaymentPageComponents/PaymentForm';
import PaymentHead from '../components/PaymentPageComponents/PaymentHead';

const payment = () => {
   return (
      <div className="payment-page page">
         <Meta title="Payment | S-Shop" />
         <BackBtn to="/orderlocation" />
         <HelpOrdering />
         <div className="container section">
            <PaymentHead />
            <PaymentForm />
         </div>
      </div>
   );
};

export default payment;
