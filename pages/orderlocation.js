import React from 'react';
import OrderLocationDetails from '../components/OrderLocationComponents/OrderLocationDetails';
import { HelpOrdering } from '../components/Help';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const orderlocation = () => {
   return (
      <div className="order-location-page page">
         <Meta title="Order Location | S-Shop" />
         <BackBtn to="/cart" />
         <HelpOrdering />
         <OrderLocationDetails />
      </div>
   );
};

export default orderlocation;
