import OrderSuccessWrapper from '../../../components/OrderSuccessComponents/OrderSuccessWrapper';
import Meta from '../../../components/Meta';

const ordersuccess = () => {
   return (
      <div className="order-success-page page">
         <Meta title="Order Success | S-Shop" />
         <OrderSuccessWrapper />
      </div>
   );
};

export default ordersuccess;
