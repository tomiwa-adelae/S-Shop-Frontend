import BackBtn from '../components/BackBtn';
import CartWrapper from '../components/CartPageComponents/CartWrapper';
import Meta from '../components/Meta';

const cart = () => {
   return (
      <div className="cart-page page">
         <Meta title="Cart | S-Shop" />
         <BackBtn to="/" />
         <CartWrapper />
      </div>
   );
};

export default cart;
