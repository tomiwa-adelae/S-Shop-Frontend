import React from 'react';

const OrderDetailsInfo = ({ order }) => {
   return (
      <div className="order-details-info section">
         <div className="container">
            <div className="wrapper">
               <div className="info payment-info py-0 px-1">
                  <div className="head py-0">
                     <h5>Payment Information</h5>
                  </div>
                  <div className="boxes">
                     <div className="box my-0 p-0">
                        <h6>Payment Method</h6>
                        <small>{order?.paymentMethod}</small>
                        {order.paymentMethod === 'Pay with Cards' && (
                           <div className="my-0">
                              <button className="btn btn-secondary">
                                 Pay now
                              </button>
                           </div>
                        )}
                     </div>
                     <div className="box my-0 p-0">
                        <h6>Payment Details</h6>
                        <small>Total Price : # {order?.totalPrice}</small>
                     </div>
                  </div>
               </div>
               <div className="info shipping-info py-0 px-1">
                  <div className="head py-0">
                     <h5>Shipping Information</h5>
                  </div>
                  <div className="boxes">
                     <div className="box my-0 py-1">
                        <h6>{order?.location}</h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderDetailsInfo;
