import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingSchool } from '../../store/actions/shippingActions';

const OrderLocationDetails = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/login?redirect=orderlocation');
      }
   }, [user]);

   const saveShippingForSchool = () => {
      dispatch(saveShippingSchool());

      router.push('/payment');
   };

   return (
      <div className="order-location-details section">
         <div className="container">
            <h3>Place of Delivery</h3>
            <p className="lead my-1">
               Choose where you want your order to be delivered to
            </p>

            <div className="btns my-1">
               <button
                  onClick={() => saveShippingForSchool()}
                  className="btn btn-primary"
               >
                  Ajayi Crowther Univerisity
               </button>
            </div>
         </div>
      </div>
   );
};

export default OrderLocationDetails;
