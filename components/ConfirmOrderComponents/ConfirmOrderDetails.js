import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SuccessMessageBox } from '../MessageBox';
import { useRouter } from 'next/router';

const ConfirmOrderDetails = () => {
   const router = useRouter();

   const schoolShippingState = useSelector((state) => state.schoolShipping);
   const { location } = schoolShippingState;

   const paymentMethodState = useSelector((state) => state.paymentMethod);
   const { paymentMethod } = paymentMethodState;

   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/login?redirect=orderlocation');
      }

      if (!location) {
         router.push('/login?redirect=orderlocation');
      }

      if (!paymentMethod) {
         router.push('/login?redirect=payment');
      }
   }, [user, location, paymentMethod]);

   return (
      <div className="confirm-order-details">
         <div className="boxes">
            {/* Personal Details */}
            <div className="box p-1 my-1">
               <div className="head ">
                  <h5>Personal Details</h5>
                  <Link href="/profile">
                     <button className="btn btn-white">Edit</button>
                  </Link>
               </div>
               <div className="details">
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {user && `First name : ${user.firstName}`}
                     </h6>
                  </div>
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {user && `Last name : ${user.lastName}`}
                     </h6>
                  </div>
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {user && `Email : ${user.email}`}
                     </h6>
                  </div>
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {user && `Phone number : ${user.phoneNumber}`}
                     </h6>
                  </div>
               </div>
            </div>
            {/* Shipping details */}
            <div className="box p-1 my-1">
               <div className="head ">
                  <h5>Shipping Details</h5>
                  <Link href="/orderlocation">
                     <button className="btn btn-white">Edit</button>
                  </Link>
               </div>
               <div className="details">
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {location && `Location : ${location}`}
                     </h6>
                  </div>
               </div>
            </div>

            {/* Payment details */}
            <div className="box p-1 my-1">
               <div className="head ">
                  <h5>Payment Details</h5>
                  <Link href="/payment">
                     <button className="btn btn-white">Edit</button>
                  </Link>
               </div>
               <div className="details">
                  <div className="my-0 p-0 item">
                     <h6 suppressHydrationWarning={true}>
                        {paymentMethod && `Method : ${paymentMethod}`}
                     </h6>
                  </div>
               </div>
            </div>

            {/* Order Items details */}
            <div className="box p-1 my-1">
               <div className="head ">
                  <h5>Order item(s)</h5>
                  <Link href="/cart">
                     <button className="btn btn-white">Edit</button>
                  </Link>
               </div>
               <div className="details">
                  {cartItems.length === 0 && (
                     <SuccessMessageBox msg="Your cart is empty! Go shopping now" />
                  )}
                  {cartItems?.map((item) => (
                     <div key={item.id} className="order-item item my-0 p-0">
                        <div className="img">
                           <img src={item.productImage} alt={item.name} />
                        </div>
                        <div className="name mx-0">
                           <h6>
                              {item.name.length >= 50
                                 ? `${item.name.substring(0, 50)}...`
                                 : ''}
                           </h6>
                           <h6 className="my-0 brand">Brand : {item.brand} </h6>
                           <h6>
                              {item.qty} x {item.price} = #{' '}
                              {item.qty * item.price}
                           </h6>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfirmOrderDetails;
