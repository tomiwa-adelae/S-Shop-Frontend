import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const CartCheckOut = ({ cartItems }) => {
   const router = useRouter();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const checkOutHandler = () => {
      if (!user) {
         router.push('/login?redirect=orderlocation');
      } else {
         router.push('/orderlocation');
      }
   };
   return (
      <div className="cart-checkout p-1">
         <div className="head">
            <h4>
               Subtotal{' '}
               <span>
                  ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                  items
               </span>
            </h4>
         </div>

         <div className="checkout-btn my-1">
            <button
               disabled={cartItems.length === 0}
               onClick={checkOutHandler}
               className="btn btn-primary"
            >
               Checkout now{' '}
               <span>
                  #{' '}
                  {cartItems.reduce(
                     (acc, item) => acc + item.qty * item.price,
                     0
                  )}
               </span>
            </button>
         </div>
      </div>
   );
};

export default CartCheckOut;
