import React from 'react';
import Link from 'next/link';

const OrderDetailsItems = ({ orderDetails }) => {
   return (
      <div className="order-details-items section">
         <div className="container">
            <div className="wrapper">
               {orderDetails.orderItems.map((order) => (
                  <div key={order._id} className="order my-0">
                     <div className="img">
                        <img src={order.productImage} alt={order.name} />
                     </div>
                     <div className="details">
                        <div className="col-one p-0">
                           <Link
                              href="/product/[id]"
                              as={`/product/${order.id}`}
                           >
                              <h5 className="name">
                                 {order.name.length >= 40
                                    ? `${order.name.substring(0, 40)}...`
                                    : order.name}
                              </h5>
                           </Link>
                           <h6 className="my-0">
                              Brand: {order.brand}
                              <span>
                                 {order.category === 'clothes' &&
                                    ` | Size: ${order.size}`}
                              </span>
                              <span>
                                 {order.category === 'shoes' &&
                                    ` | Size: ${order.size}`}
                              </span>
                           </h6>
                           <h6>
                              {order.qty} x {order.price} = #{' '}
                              {order.qty * order.price}
                           </h6>
                        </div>
                        <div className="col-two p-0">
                           {orderDetails?.isPaid ? (
                              <span className="badge badge-secondary my-0">
                                 Paid
                              </span>
                           ) : (
                              <span className="badge badge-danger my-0">
                                 Not Paid
                              </span>
                           )}
                           {orderDetails?.isDelivered ? (
                              <span className="badge badge-secondary my-0">
                                 Delivered
                              </span>
                           ) : (
                              <span className="badge badge-danger my-0">
                                 Not Delivered
                              </span>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default OrderDetailsItems;
