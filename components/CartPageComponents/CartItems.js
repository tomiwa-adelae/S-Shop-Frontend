import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import CartCheckOut from './CartCheckOut';
import Item from './Item';
import { SuccessMessageBox } from '../MessageBox';

const CartItems = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const cartState = useSelector((state) => state.cart);
   const { cartItems, success } = cartState;

   useEffect(() => {
      if (success) {
         router.push('/cart');
      }
   }, []);

   useEffect(() => {
      if (router.query.id) {
         dispatch(addToCart(router.query.id, router.query.qty));
      }
   }, [dispatch, router]);

   return (
      <div>
         {cartItems.length === 0 && (
            <div className="container">
               <SuccessMessageBox msg="Your cart is empty! Go shopping!" />
            </div>
         )}

         {cartItems.length !== 0 && (
            <div className="cart-items section">
               <div className="container">
                  <div className="content">
                     <div className="wrapper">
                        {cartItems?.map((item) => (
                           <Item key={item.id} item={item} />
                        ))}
                     </div>
                     <div className="checkout-section">
                        <CartCheckOut cartItems={cartItems} />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default CartItems;
