import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function PaymentButton() {
   const config = {
      public_key: 'FLWPUBK_TEST-56a737540977534c10ae2185dd0f9f61-X',
      tx_ref: Date.now(),
      amount: 200,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
         email: 'adelaetomiwa6@gmail.com',
         phone_number: '07038803037',
         name: 'Adelae Adetomiwa',
      },
      customizations: {
         title: 'my Payment Title',
         description: 'Payment for items in cart',
         logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
   };

   const handleFlutterPayment = useFlutterwave(config);

   return (
      <div className="App">
         <button
            onClick={() => {
               handleFlutterPayment({
                  callback: (response) => {
                     console.log(response);
                     closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
               });
            }}
         >
            Payment with React hooks
         </button>
      </div>
   );
}
