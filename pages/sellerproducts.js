import React from 'react';
import SellerProductsIntro from '../components/SellerProductsComponents/SellerProductsIntro';
import SellerProductsList from '../components/SellerProductsComponents/SellerProductsList';
import { SellerNotificationBox } from '../components/SellerNotificationBox';

const sellerproducts = () => {
   return (
      <div className="seller-products-page">
         <SellerNotificationBox />
         <SellerProductsIntro />
         <SellerProductsList />
         <SellerNotificationBox />
      </div>
   );
};

export default sellerproducts;
