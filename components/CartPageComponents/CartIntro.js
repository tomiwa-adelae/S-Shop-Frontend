import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartIntro = () => {
   const cartState = useSelector((state) => state.cart);
   const { cartItems } = cartState;
   return (
      <div className="cart-intro section my-0">
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

            {cartItems.length === 0 && (
               <h5 className="message my-0 p-1">
                  Your cart is empty! <Link href="/">Go shopping</Link>
               </h5>
            )}
         </div>
      </div>
   );
};

export default CartIntro;
