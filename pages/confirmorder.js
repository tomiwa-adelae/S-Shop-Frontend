import React from 'react';
import BackBtn from '../components/BackBtn';
import ConfirmOrderCheckOut from '../components/ConfirmOrderComponents/ConfirmOrderCheckOut';
import ConfirmOrderDetails from '../components/ConfirmOrderComponents/ConfirmOrderDetails';
import ConfirmOrderHead from '../components/ConfirmOrderComponents/ConfirmOrderHead';
import { HelpOrdering } from '../components/Help';

const confirmorder = () => {
   return (
      <div className="confirm-order-page">
         <BackBtn to="/payment" />
         <HelpOrdering />
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
