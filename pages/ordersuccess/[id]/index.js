import OrderSimilarProducts from '../../../components/OrderSuccessComponents/OrderSimilarProducts';
import OrderSuccessCarousel from '../../../components/OrderSuccessComponents/OrderSuccessCarousel';
import OrderSuccessDetails from '../../../components/OrderSuccessComponents/OrderSuccessDetails';
import { server } from '../../../config/server';

const ordersuccess = ({ order, similarProducts }) => {
   return (
      <div className="order-success-page">
         <OrderSuccessCarousel orderItems={order.order.orderItems} />
         <OrderSuccessDetails order={order} />
         <OrderSimilarProducts
            product={order.order.orderItems[0]}
            similarProducts={similarProducts}
         />
      </div>
   );
};

export const getStaticProps = async (context) => {
   // Get current order
   const res = await fetch(`${server}/api/orders/${context.params.id}`);

   const order = await res.json();

   const firstOrderCategory = order.order.orderItems[0].category;
   const firstOrderCategoryId = order.order.orderItems[0]._id;
   // Get similar products
   const similar = await fetch(
      `${server}/api/products/similar/products/${firstOrderCategory}/${firstOrderCategoryId}`
   );

   const similarProducts = await similar.json();

   return {
      props: {
         order,
         similarProducts,
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

export default ordersuccess;
