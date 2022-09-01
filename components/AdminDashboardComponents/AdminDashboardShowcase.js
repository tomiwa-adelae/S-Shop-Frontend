import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AdminDashboardShowcase = () => {
   const router = useRouter();

   const [brandLogo, setBrandLogo] = useState(null);

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   useEffect(() => {
      setBrandLogo(seller?.brandLogo || seller?.picture);

      if (!seller) {
         router.push('/loginseller');
      }
   }, [router, seller]);

   return (
      <div className="admin-dashboard-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/admindashboard`}>
                           <span>Admin</span>
                        </Link>
                     </h6>
                  </div>
                  <h3 suppressHydrationWarning={true}>
                     {seller ? `${seller.firstName} ${seller.lastName}` : null}
                  </h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {seller?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{seller?.phoneNumber}</h5>
               </div>
               <div className="img">
                  <img
                     suppressHydrationWarning={true}
                     src={brandLogo}
                     alt="S-Shop"
                  />
                  <h5 suppressHydrationWarning={true} className="my-0">
                     {seller?.brandName}
                  </h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboardShowcase;
