import Link from 'next/link';
import React from 'react';

const SellerProductsIntro = () => {
   return (
      <div className="seller-products-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellerdashboard`}>
                        <span>Profile</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellerproducts`}>
                        <span>My Products</span>
                     </Link>{' '}
                  </h6>
               </div>
               <Link href="/sellercreateproduct">
                  <button className="btn btn-secondary">
                     Create new product
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SellerProductsIntro;
