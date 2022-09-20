import React from 'react';
import CartIntro from './CartIntro';
import CartItems from './CartItems';
import CartProductCarousel from './CartProductCarousel';
import { useRouter } from 'next/router';

const CartWrapper = () => {
   const router = useRouter();

   const { id, size, qty } = router.query;

   return (
      <div>
         <CartProductCarousel id={id} size={size} qty={qty} />
         <CartIntro />
         <CartItems id={id} size={size} qty={qty} />
      </div>
   );
};

export default CartWrapper;
