import React from 'react';
import SellerCreateProductForm from '../components/SellerCreateProductComponents/SellerCreateProductForm';
import { SellerNotificationBox } from '../components/SellerNotificationBox';

const sellercreateproduct = () => {
   return (
      <div className="seller-create-product-page">
         <SellerNotificationBox />
         <SellerCreateProductForm />
         <SellerNotificationBox />
      </div>
   );
};

export default sellercreateproduct;
