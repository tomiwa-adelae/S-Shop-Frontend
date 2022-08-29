import Link from 'next/link';
import React from 'react';

const MyOrdersIntro = () => {
   return (
      <div className="my-orders-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/profile`}>
                        <span>Profile</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/myorders`}>
                        <span>My Orders</span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrdersIntro;
