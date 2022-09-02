import React from 'react';
import SellerProductsIntro from '../components/SellerProductsComponents/SellerProductsIntro';
import SellerProductsList from '../components/SellerProductsComponents/SellerProductsList';

const sellerproducts = () => {
   return (
      <div className="seller-products-page">
         <SellerProductsIntro />
         <SellerProductsList />
      </div>
   );
};

export default sellerproducts;
