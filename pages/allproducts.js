import React from 'react';
import AllProductsCarousel from '../components/AllProductsComponents/AllProductsCarousel';
import AllProductsIntro from '../components/AllProductsComponents/AllProductsIntro';
import AllProductsItems from '../components/AllProductsComponents/AllProductsItems';
import { server } from '../config/server';

const allproducts = ({ products }) => {
   return (
      <div className="all-products-page">
         <AllProductsCarousel products={products} />
         <AllProductsIntro />
         <AllProductsItems products={products} />
      </div>
   );
};

export const getStaticProps = async () => {
   const resProducts = await fetch(`${server}/api/products`);

   const products = await resProducts.json();

   return {
      props: {
         products,
      },
   };
};

export default allproducts;
