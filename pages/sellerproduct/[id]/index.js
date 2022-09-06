import React from 'react';
import SellerProductWrapper from '../../../components/SellerProductComponents/SellerProductWrapper';
import { SellerNotificationBox } from '../../../components/SellerNotificationBox';

const sellerProduct = () => {
   return (
      <div className="seller-product-page">
         <SellerNotificationBox />
         <SellerProductWrapper />
         <SellerNotificationBox />
      </div>
   );
};

export default sellerProduct;
