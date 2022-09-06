import React from 'react';
import AdminProductWrapper from '../../../components/AdminProductComponents/AdminProductWrapper';
// import { AdminNotificationBox } from '../../../components/AdminNotificationBox';

const adminProduct = () => {
   return (
      <div className="admin-product-page">
         {/* <AdminNotificationBox /> */}
         <AdminProductWrapper />
         {/* <AdminNotificationBox /> */}
      </div>
   );
};

export default adminProduct;
