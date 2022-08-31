import Link from 'next/link';
import React from 'react';

const BrandIntro = ({ brandName }) => {
   return (
      <div className="brand-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href={brandName}>
                     <span>{brandName}</span>
                  </Link>{' '}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default BrandIntro;
