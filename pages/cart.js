import BackBtn from '../components/BackBtn';
import CartWrapper from '../components/CartPageComponents/CartWrapper';

const cart = () => {
   return (
      <div className="cart-page page">
         <BackBtn to="/" />
         <CartWrapper />
      </div>
   );
};

export default cart;
