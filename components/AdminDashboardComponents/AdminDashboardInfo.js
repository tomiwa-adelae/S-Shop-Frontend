import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '../../store/actions/userSellerActions';

const AdminDashboardInfo = () => {
   const dispatch = useDispatch();

   const logoutHandler = () => {
      dispatch(logoutAdmin());
   };

   return (
      <div className="admin-dashboard-info section">
         <div className="container">
            <div className="wrapper">
               <Link href="/adminorders">
                  <div className="box p-1">
                     <h4>All orders</h4>
                     <small>Check out all your orders</small>
                  </div>
               </Link>
               <Link href="/adminproducts">
                  <div className="box p-1">
                     <h4>All Products</h4>
                     <small>Check out all your products</small>
                  </div>
               </Link>
               <Link href="/adminpersonaldetails">
                  <div className="box p-1">
                     <h4>Personal Information</h4>
                     <small>
                        Edit name, email, phone number, brand logo ...
                     </small>
                  </div>
               </Link>
               <Link href="/changelogin">
                  <div className="box p-1">
                     <h4>Login Details</h4>
                     <small>Change your password </small>
                  </div>
               </Link>
               <div onClick={logoutHandler} className="box logout p-1">
                  <h4>Logout as admin</h4>
                  <small className="p-0"></small>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboardInfo;
