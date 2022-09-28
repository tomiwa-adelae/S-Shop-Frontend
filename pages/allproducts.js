import React from 'react';
import AllProductsWrapper from '../components/AllProductsComponents/AllProductsWrapper';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const allproducts = () => {
   return (
      <div className="all-products-page page">
         <Meta title="All Products | S-Shop" />
         <BackBtn to="/" />
         <AllProductsWrapper />
      </div>
   );
};

export default allproducts;
