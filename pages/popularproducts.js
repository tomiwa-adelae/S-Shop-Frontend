import React from 'react';
import PopularProductsCarousel from '../components/PopularProductsComponents/PopularProductsCarousel';
import PopularProductsIntro from '../components/PopularProductsComponents/PopularProductsIntro';
import PopularProductsItems from '../components/PopularProductsComponents/PopularProductsItems';
import { server } from '../config/server';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const popularproducts = ({ products }) => {
   return (
      <div className="popular-products-page page">
         <Meta title="Popular Products | S-Shop" />
         <BackBtn to="/" />
         <PopularProductsCarousel products={products} />
         <PopularProductsIntro />
         <PopularProductsItems products={products} />
      </div>
   );
};

export const getStaticProps = async () => {
   const resProducts = await fetch(
      `${server}/api/products/most/rated/products`
   );

   const products = await resProducts.json();

   return {
      props: {
         products,
      },
   };
};

export default popularproducts;
