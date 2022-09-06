import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const AdminOrderDetailsIntro = () => {
   const router = useRouter();
   return (
      <div className="admin-order-details-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href="/adminorders">
                     <span>All orders</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href={`/adminorder/${router.query.id}`}>
                     <span>Details</span>
                  </Link>{' '}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default AdminOrderDetailsIntro;
