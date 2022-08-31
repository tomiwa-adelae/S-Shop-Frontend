import Link from 'next/link';
import React from 'react';

const PopularProductsIntro = () => {
   return (
      <div className="popular-products-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href="/popularproducts">
                     <span>Popular Products</span>
                  </Link>{' '}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default PopularProductsIntro;
