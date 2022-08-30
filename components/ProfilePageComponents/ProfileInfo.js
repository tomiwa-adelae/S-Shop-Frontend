import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';

const ProfileInfo = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const logoutHandler = () => {
      dispatch(logout());
   };

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
               <div onClick={logoutHandler} className="box logout p-1">
                  <h4>Logout</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
