import Link from 'next/link';

const OrderSuccessDetails = ({ order, orderUser }) => {
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

            {order?.paymentMethod === 'Pay with Cards' && (
               <button className="btn btn-grey my-1">Proceed to payment</button>
            )}

            <Link href="/order/[id]" as={`/order/${order?._id}`}>
               <button className="my-1 mx-1 btn btn-grey">
                  View order details
               </button>
            </Link>
         </div>
      </div>
   );
};

export default OrderSuccessDetails;
