import Link from 'next/link';
import React from 'react';

const ProfileInfo = () => {
   return (
      <div className="profile-info section">
         <div className="container">
            <div className="wrapper">
               <Link href="/personaldetails">
                  <div className="box p-1">
                     <h4>Personal Details</h4>
                     <small>Edit name, email, phone number, image </small>
                  </div>
               </Link>
               <Link href="/myorders">
                  <div className="box p-1">
                     <h4>Your Orders</h4>

                     <small>Track and see all your orders</small>
                  </div>
               </Link>
               <Link href="/changelogin">
                  <div className="box p-1">
                     <h4>Login Details</h4>
                     <small>Change your password </small>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
