import React from 'react';
import PopularProductsWrapper from '../components/PopularProductsComponents/PopularProductsWrapper';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const popularproducts = () => {
   return (
      <div className="popular-products-page page">
         <Meta title="Popular Products | S-Shop" />
         <BackBtn to="/" />
         <PopularProductsWrapper />
      </div>
   );
};

export default popularproducts;
