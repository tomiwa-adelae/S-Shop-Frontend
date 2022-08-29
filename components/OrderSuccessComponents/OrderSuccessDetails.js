import Link from 'next/link';
import React from 'react';

const OrderSuccessDetails = ({ order }) => {
   return (
      <div className="order-success-details section">
         <div className="container">
            <div className="head py-1">
               <h4>Order Success</h4>
            </div>

            <p>
               Dear {order.orderUser?.firstName}, your order has been
               successfully placed and will be processed as soon as possible.
               S-Shop will get back to you within the next 24 hours
            </p>

            <div className="btns my-1">
               {order.order.paymentMethod === 'Pay with Cards' && (
                  <button className="btn btn-grey">Proceed to Payment</button>
               )}
               <Link href="/order/[id]" as={`/order/${order.order?._id}`}>
                  <button className="btn btn-grey">View order details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OrderSuccessDetails;
