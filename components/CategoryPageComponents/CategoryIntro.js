import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const CategoryIntro = () => {
   const router = useRouter();
   return (
      <div className="category-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop</span>
                  </Link>{' '}
                  &gt;{' '}
                  {router.query.category && (
                     <Link href={router.query.category}>
                        <span>{router.query.category}</span>
                     </Link>
                  )}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default CategoryIntro;
