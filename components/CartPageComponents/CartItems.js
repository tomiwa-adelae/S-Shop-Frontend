import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import CartCheckOut from './CartCheckOut';
import Item from './Item';

const CartItems = ({ id, size, qty }) => {
   const dispatch = useDispatch();
   const router = useRouter();

   const cartState = useSelector((state) => state.cart);
   const { cartItems, success } = cartState;

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (id) {
         dispatch(addToCart(id, size, qty));
      }

      if (success) {
         router.push('/cart');
      }
   }, [dispatch, success, user]);

   return (
      <>
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
      </>
   );
};

export default CartItems;
