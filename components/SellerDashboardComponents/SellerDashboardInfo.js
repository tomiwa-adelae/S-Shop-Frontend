import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '../../store/actions/userSellerActions';

const SellerDashboardInfo = () => {
   const dispatch = useDispatch();

   const logoutHandler = () => {
      dispatch(logoutAdmin());
   };

   return (
      <div className="seller-dashboard-info section">
         <div className="container">
            <div className="wrapper">
               <Link href="/sellerorders">
                  <div className="box p-1">
                     <h4>All orders</h4>
                     <small>Check out all your orders</small>
                  </div>
               </Link>
               <Link href="/sellerproducts">
                  <div className="box p-1">
                     <h4>All Products</h4>
                     <small>Check out all your products</small>
                  </div>
               </Link>
               <Link href="/sellerpersonaldetails">
                  <div className="box p-1">
                     <h4>Personal Information</h4>
                     <small>
                        Edit name, email, phone number, brand logo ...
                     </small>
                  </div>
               </Link>
               <Link href="/changesellerlogin">
                  <div className="box p-1">
                     <h4>Login Details</h4>
                     <small>Change your password </small>
                  </div>
               </Link>
               <div onClick={logoutHandler} className="box logout p-1">
                  <h4>Logout as seller</h4>
                  <small className="p-0"></small>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SellerDashboardInfo;
