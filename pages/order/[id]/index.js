import React from 'react';
import OrderDetailsCarousel from '../../../components/OrderDetailsComponents/OrderDetailsCarousel';
import OrderDetailsInfo from '../../../components/OrderDetailsComponents/OrderDetailsInfo';
import OrderDetailsIntro from '../../../components/OrderDetailsComponents/OrderDetailsIntro';
import OrderDetailsItems from '../../../components/OrderDetailsComponents/OrderDetailsItems';
import { server } from '../../../config/server';

const order = ({ order }) => {
   return (
      <div className="order-details-page">
         <OrderDetailsCarousel orderItems={order.order.orderItems} />
         <OrderDetailsIntro />
         <OrderDetailsItems
            orderDetails={order.order}
            orderUser={order.orderUser}
         />
         <OrderDetailsInfo order={order.order} />
      </div>
   );
};

export const getStaticProps = async (context) => {
   // Get current order
   const res = await fetch(`${server}/api/orders/${context.params.id}`);

   const order = await res.json();

   return {
      props: {
         order,
      },
   };
};

export const getStaticPaths = async (context) => {
   const res = await fetch(`${server}/api/orders`);

   const orders = await res.json();

   const ids = orders.map((order) => order._id);
   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

   return {
      paths,
      fallback: false,
   };
};

export default order;
