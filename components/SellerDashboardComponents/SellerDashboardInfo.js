import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../store/actions/errorActions';
import { logoutAdmin } from '../../store/actions/userSellerActions';

const SellerDashboardInfo = () => {
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const logoutHandler = () => {
      dispatch(clearErrors());
      dispatch(logoutAdmin());
   };

   return (
      <div className="seller-dashboard-info section">
         <div className="container">
            <div suppressHydrationWarning={true} className="wrapper">
               {seller?.isSShopAdmin ? (
                  <>
                     <Link href="/adminorders">
                        <div className="box p-1">
                           <h4>All Orders</h4>
                           <small>Check out all orders</small>
                        </div>
                     </Link>
                     <Link href="/adminusers">
                        <div className="box p-1">
                           <h4>All Users</h4>
                           <small>Check out all users</small>
                        </div>
                     </Link>
                     <Link href="/adminsellers">
                        <div className="box p-1">
                           <h4>All Sellers</h4>
                           <small>Check out all sellers</small>
                        </div>
                     </Link>
                     <Link href="/adminproducts">
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
                  </>
               ) : null}
               {!seller?.isSShopAdmin && (
                  <>
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
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default SellerDashboardInfo;
