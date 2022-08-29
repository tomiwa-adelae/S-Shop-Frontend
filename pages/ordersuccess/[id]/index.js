import OrderSimilarProducts from '../../../components/OrderSuccessComponents/OrderSimilarProducts';
import OrderSuccessCarousel from '../../../components/OrderSuccessComponents/OrderSuccessCarousel';
import OrderSuccessDetails from '../../../components/OrderSuccessComponents/OrderSuccessDetails';
import { server } from '../../../config/server';

const ordersuccess = ({
   order,
   // similarProducts
}) => {
   return (
      <div className="order-success-page">
         {/* <OrderSuccessCarousel orderItems={order.order.orderItems} />
         <OrderSuccessDetails order={order} /> */}
         {/* <OrderSimilarProducts
            product={order.order.orderItems[0]}
            similarProducts={similarProducts}
         /> */}
         <OrderSuccessCarousel />
         <OrderSuccessDetails />
         {/* <OrderSimilarProducts /> */}
      </div>
   );
};

// export const getServerSideProps = async (context) => {
//    const res = await fetch(`${server}/api/orders/${context.params.id}`);

//    console.log(req);
//    const order = await res.json();

//    return {
//       props: {
//          order,
//       },
//    };
// };

// export const getStaticProps = async (context) => {
//    console.log(window);
//    // Get current order
//    const res = await fetch(`${server}/api/orders/${context.params.id}`, {
//       method: 'GET',
//       headers: new Headers({
//          'Content-Type': 'application/json',
//          'x-auth-token':
//             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJfaWQiOiI2MzAzNjkzMDUzMDNmMDE4NDMwMzA3YzkiLCJmaXJzdE5hbWUiOiJBZGVsYWUiLCJsYXN0TmFtZSI6IlRvbWl3YSIsInBob25lTnVtYmVyIjoiMDgwMjc4MzYwMDEiLCJlbWFpbCI6ImFkZWxhZXRvbWl3YTZAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTQkaWlzdkoxekZneDVLMC5ZVlFodHhndUhxRHRubWxCWjA5b3VLaGNwM1NQbXlPaEZCQ0hldHEiLCJpc0FkbWluIjpmYWxzZSwiaXNTU2hvcEFkbWluIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yMlQxMTozMjowMi43OTBaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yMlQxMTozMjowMi43OTBaIiwiX192IjowfSwiaWF0IjoxNjYxNzExNDY2fQ.6CRINc5bMKYDj6EC_UFTqT-hz-3ZJmkEqPgPBBYXhxw',
//       }),
//    });

//    const order = await res.json();

//    const firstOrderCategory = order.order.orderItems[0].category;
//    const firstOrderCategoryId = order.order.orderItems[0]._id;
//    // Get similar products
//    const similar = await fetch(
//       `${server}/api/products/similar/products/${firstOrderCategory}/${firstOrderCategoryId}`
//    );

//    const similarProducts = await similar.json();

//    return {
//       props: {
//          order,
//          similarProducts,
//       },
//    };
// };

// export const getStaticPaths = async (context) => {
//    const res = await fetch(`${server}/api/orders`);

//    const orders = await res.json();

//    const ids = orders.map((order) => order._id);
//    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//    return {
//       paths,
//       fallback: false,
//    };
// };

export default ordersuccess;
