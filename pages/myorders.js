import MyOrdersIntro from '../components/MyOrdersComponents/MyOrdersIntro';
import MyOrdersList from '../components/MyOrdersComponents/MyOrdersList';

const myorders = () => {
   return (
      <div className="my-orders-page">
         <MyOrdersIntro />
         <MyOrdersList />
      </div>
   );
};

export default myorders;
