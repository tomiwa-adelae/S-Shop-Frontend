import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const AllProductsIntro = () => {
   const router = useRouter();
   return (
      <div className="all-products-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href="/allproducts">
                     <span>All products</span>
                  </Link>{' '}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default AllProductsIntro;
