import React from 'react';
import OrderLocationDetails from '../components/OrderLocationComponents/OrderLocationDetails';
import { HelpOrdering } from '../components/Help';

const orderlocation = () => {
   return (
      <div className="order-location-page">
         <HelpOrdering />
         <OrderLocationDetails />
      </div>
   );
};

export default orderlocation;
