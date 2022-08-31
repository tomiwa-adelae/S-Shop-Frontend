import AllMyOrdersIntro from '../components/AllMyOrdersComponents/AllMyOrdersIntro';
import AllMyOrdersList from '../components/AllMyOrdersComponents/AllMyOrdersList';

const allmyorders = () => {
   return (
      <div className="all-my-orders-page">
         <AllMyOrdersIntro />
         <AllMyOrdersList />
      </div>
   );
};

export default allmyorders;
