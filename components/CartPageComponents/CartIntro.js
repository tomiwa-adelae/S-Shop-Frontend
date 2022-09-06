import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartIntro = () => {
   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;
   return (
      cartItems.length !== 0 && (
         <div className="cart-intro section">
            <div className="container">
               <div className="links-tags">
                  <h4>
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href="/cart">
                        <span>cart</span>
                     </Link>{' '}
                  </h4>
               </div>
            </div>
         </div>
      )
   );
};

export default CartIntro;
