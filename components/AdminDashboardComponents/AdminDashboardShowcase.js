import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AdminDashboardShowcase = () => {
   const router = useRouter();

   const sellerState = useSelector((state) => state.loginSeller);
   const { user } = sellerState;

   useEffect(() => {
      if (!user) {
         router.push('/loginseller');
      }
   }, [router, user]);

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
                     {user ? `${user.firstName} ${user.lastName}` : null}
                  </h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {user?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{user?.phoneNumber}</h5>
               </div>
               <div className="img">
                  <img
                     suppressHydrationWarning={true}
                     src={
                        user
                           ? user.brandLogo
                              ? user.brandLogo
                              : user.picture
                           : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                     }
                     alt=""
                  />
                  <h5 suppressHydrationWarning={true} className="my-0">
                     {user?.brandName}
                  </h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboardShowcase;
