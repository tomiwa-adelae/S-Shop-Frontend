import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';
import MyOrdersIntro from '../components/MyOrdersComponents/MyOrdersIntro';
import MyOrdersList from '../components/MyOrdersComponents/MyOrdersList';

const myorders = () => {
   return (
      <div className="my-orders-page page">
         <Meta title="My Orders | S-Shop" />
         <BackBtn to="/profile" />
         <MyOrdersIntro />
         <MyOrdersList />
      </div>
   );
};

export default myorders;
