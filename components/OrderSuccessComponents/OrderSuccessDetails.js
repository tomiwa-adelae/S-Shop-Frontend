import Link from 'next/link';
import { useSelector } from 'react-redux';
import { SuccessMessageBox } from '../MessageBox';
import PaymentButton from '../PaymentButton';

const OrderSuccessDetails = ({ order, orderUser }) => {
   const payCardState = useSelector((state) => state.payCard);
   const { success } = payCardState;
   return (
      <div className="order-success-details section">
         <div className="container">
            <div className="head py-1">
               <h4>Order Success</h4>
            </div>

            <p>
               Dear {orderUser?.firstName}, your order has been successfully
               placed and will be processed as soon as possible. S-Shop will get
               back to you within the next 24 hours
            </p>

            {!success &&
               order?.paymentMethod === 'Pay with Cards' &&
               order?.isPaid !== true && (
                  <div className="my-1">
                     <PaymentButton details={order} />
                  </div>
               )}

            {success && (
               <SuccessMessageBox msg="Payment successful! Please proceed!" />
            )}

            <Link href="/order/[id]" as={`/order/${order?._id}`}>
               <button className="my-0 btn btn-grey">View order details</button>
            </Link>
         </div>
      </div>
   );
};

export default OrderSuccessDetails;
