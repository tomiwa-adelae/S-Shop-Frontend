import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SellerEditProductIntro = () => {
   const router = useRouter();

   return (
      <div className="seller-edit-product-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellerdashboard`}>
                        <span>Dashboard</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellerproduct/${router.query.id}`}>
                        <span>Product</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellereditproduct/${router.query.id}`}>
                        <span>Edit product</span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SellerEditProductIntro;
