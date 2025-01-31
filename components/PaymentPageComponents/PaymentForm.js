import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../store/actions/shippingActions';

const PaymentForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [payment, setPayment] = useState('Pay with Cards');

   const schoolShippingState = useSelector((state) => state.schoolShipping);
   const { location } = schoolShippingState;

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/login?redirect=orderlocation');
      }

      if (!location) {
         router.push('/login?redirect=orderlocation');
      }
   }, [user, location, router]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(savePaymentMethod(payment));
      router.push('/confirmorder');
   };

   return (
      <div className="payment-form">
         <form onSubmit={handleSubmit}>
            <div className="checkbox">
               <input
                  type="radio"
                  id="Pay with Cards"
                  value={payment}
                  name="payment"
                  defaultChecked
                  required
                  autoComplete="off"
                  onChange={(e) => setPayment(e.target.id)}
               />
               <label htmlFor="Pay with Cards">Pay with Cards</label>
            </div>
            <div className="checkbox">
               <input
                  type="radio"
                  id="Cash on Delivery"
                  value={payment}
                  name="payment"
                  required
                  autoComplete="off"
                  onChange={(e) => setPayment(e.target.id)}
               />
               <label htmlFor="Cash on Delivery">Cash on Delivery</label>
            </div>
            <div className="checkbox">
               <input
                  type="radio"
                  id="Transfer on Delivery"
                  value={payment}
                  name="payment"
                  required
                  autoComplete="off"
                  onChange={(e) => setPayment(e.target.id)}
               />
               <label htmlFor="Transfer on Delivery">
                  Transfer on Delivery
               </label>
            </div>
            <div>
               <button className="btn btn-primary">Proceed</button>
            </div>
         </form>
      </div>
   );
};

export default PaymentForm;
