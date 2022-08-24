import React from 'react';
import { useRouter } from 'next/router';
import CartProductCarousel from '../components/CartPageComponents/CartProductCarousel';
import CartItems from '../components/CartPageComponents/CartItems';

const cart = () => {
   const router = useRouter();

   const { id, size } = router.query;

   return (
      <div className="cart-page">
         <CartProductCarousel />
         <CartItems id={id} size={size} />
         <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            atque accusamus deserunt voluptatibus dolorum laborum blanditiis
            saepe hic nobis explicabo cupiditate eveniet inventore suscipit
            molestiae. Libero ratione eius, hic nisi eos ut nesciunt,
            repellendus error commodi magnam molestias doloremque voluptatibus
            numquam aliquam officia sit temporibus magni dignissimos.
            Voluptates, fuga earum.
         </h3>
      </div>
   );
};

export default cart;
