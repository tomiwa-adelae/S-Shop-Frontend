import React from 'react';
import { useRouter } from 'next/router';
import CartProductCarousel from '../components/CartPageComponents/CartProductCarousel';
import CartItems from '../components/CartPageComponents/CartItems';
import CartIntro from '../components/CartPageComponents/CartIntro';
import BackBtn from '../components/BackBtn';

const cart = () => {
   const router = useRouter();

   const { id, size, qty } = router.query;

   return (
      <div className="cart-page">
         <CartProductCarousel id={id} size={size} qty={qty} />
         <CartIntro />
         <BackBtn to="" />
         <CartItems id={id} size={size} qty={qty} />
      </div>
   );
};

export default cart;
