import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CartItems = ({ id, size }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      // dispatch(addToCart(id, size))
   }, [dispatch]);

   return <div className="cart-items"></div>;
};

export default CartItems;
