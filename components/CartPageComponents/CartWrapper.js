import React from 'react';
import CartIntro from './CartIntro';
import CartItems from './CartItems';
import CartProductCarousel from './CartProductCarousel';

const CartWrapper = () => {
   return (
      <div>
         <CartProductCarousel />
         <CartIntro />
         <CartItems />
      </div>
   );
};

export default CartWrapper;
