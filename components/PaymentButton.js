import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useDispatch, useSelector } from 'react-redux';

import { cardPayment } from '../store/actions/orderActions';
import { SmallWhiteSpinner } from './Spinner';

export default function PaymentButton({ details }) {
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const payCardState = useSelector((state) => state.payCard);
   const { loading } = payCardState;

   const config = {
      public_key: 'FLWPUBK-224ac8f4f933b05b858ca5c1f018ea2e-X',
      tx_ref: Date.now(),
      amount: details.totalPrice,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
         email: user.email,
         phone_number: user.phoneNumber,
         name: `${user.firstName} ${user.lastName}`,
      },
      customizations: {
         title: 'PAY NOW',
         description: '',
         logo: '',
      },
   };

   const handleFlutterPayment = useFlutterwave(config);

   return (
      <div className="App">
         <button
            className="btn btn-secondary"
            onClick={() => {
               handleFlutterPayment({
                  callback: (response) => {
                     dispatch(cardPayment(response, details?._id));
                     // console.log(response);
                     closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
               });
            }}
         >
            {loading ? <SmallWhiteSpinner /> : 'PAY NOW'}
         </button>
      </div>
   );
}
