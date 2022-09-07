import React from 'react';
import BackBtn from '../BackBtn';

const ConfirmOrderHead = () => {
   return (
      <div className="confirm-order-head">
         <div className="container">
            <h3>Confirm order</h3>

            <p className="lead my-1">
               Please confirm the details for your order
            </p>

            <BackBtn to="/payment" />
         </div>
      </div>
   );
};

export default ConfirmOrderHead;
