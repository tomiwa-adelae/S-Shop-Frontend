import React from 'react';
import OrderLocationDetails from '../components/OrderLocationComponents/OrderLocationDetails';
import { HelpOrdering } from '../components/Help';
import BackBtn from '../components/BackBtn';

const orderlocation = () => {
   return (
      <div className="order-location-page page">
         <BackBtn to="/cart" />
         <HelpOrdering />
         <OrderLocationDetails />
      </div>
   );
};

export default orderlocation;
