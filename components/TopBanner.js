import Link from 'next/link';
import React from 'react';

const TopBanner = () => {
   return (
      <div className="top-banner">
         <div className="container">
            <div className="wrapper">
               <Link href="/sell">Sell</Link>
            </div>
         </div>
      </div>
   );
};

export default TopBanner;
