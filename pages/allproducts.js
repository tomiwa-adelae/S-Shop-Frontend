import React from 'react';
import AllProductsCarousel from '../components/AllProductsComponents/AllProductsCarousel';
import AllProductsIntro from '../components/AllProductsComponents/AllProductsIntro';
import AllProductsItems from '../components/AllProductsComponents/AllProductsItems';
import { server } from '../config/server';
import BackBtn from '../components/BackBtn';

const allproducts = ({ products }) => {
   return (
      <div className="all-products-page">
         <BackBtn to="/" />
         {products.length !== 0 && <AllProductsCarousel products={products} />}
         {products.length !== 0 && <AllProductsIntro />}
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
