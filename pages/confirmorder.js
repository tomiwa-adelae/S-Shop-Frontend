import React from 'react';
import ConfirmOrderCheckOut from '../components/ConfirmOrderComponents/ConfirmOrderCheckOut';
import ConfirmOrderDetails from '../components/ConfirmOrderComponents/ConfirmOrderDetails';
import ConfirmOrderHead from '../components/ConfirmOrderComponents/ConfirmOrderHead';

const confirmorder = () => {
   return (
      <div className="confirm-order-page section">
         <ConfirmOrderHead />
         <div className="container">
            <div className="wrapper">
               <ConfirmOrderDetails />
               <ConfirmOrderCheckOut />
            </div>
         </div>
      </div>
   );
};

export default confirmorder;
