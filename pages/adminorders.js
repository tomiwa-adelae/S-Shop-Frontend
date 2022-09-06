import React from 'react';
import AdminOrdersIntro from '../components/AdminOrdersComponents/AdminOrdersIntro';
import AdminOrdersList from '../components/AdminOrdersComponents/AdminOrdersList';

const adminorders = () => {
   return (
      <div className="admin-orders-page">
         <AdminOrdersIntro />
         <AdminOrdersList />
      </div>
   );
};

export default adminorders;
