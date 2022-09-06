import React from 'react';
import AdminProductsIntro from '../components/AdminProductsComponents/AdminProductsIntro';
import AdminProductsList from '../components/AdminProductsComponents/AdminProductsList';
// import { AdminNotificationBox } from '../components/AdminNotificationBox';

const adminproducts = () => {
   return (
      <div className="admin-products-page">
         {/* <AdminNotificationBox /> */}
         <AdminProductsIntro />
         <AdminProductsList />
         {/* <AdminNotificationBox /> */}
      </div>
   );
};

export default adminproducts;
