import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, payOrder } from '../../store/actions/sellerOrderActions';
import { ErrorMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const AdminOrderDetailsInfo = ({ order, orderUser }) => {
   console.log(orderUser);
   const dispatch = useDispatch();

   const adminPayOrderState = useSelector((state) => state.adminPayOrder);
   const { loading } = adminPayOrderState;

   const adminDeliverOrderState = useSelector(
      (state) => state.adminDeliverOrder
   );
   const { loadingDeliver } = adminDeliverOrderState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   return (
      <div className="admin-order-details-info section">
         <div className="container">
            <div className="wrapper">
               <div className="info payment-info py-0 px-1">
                  <div className="head py-0">
                     <h5>Personal Information</h5>
                  </div>
                  <div className="boxes">
                     <div className="box my-0 p-0">
                        <h6>{`Name : ${orderUser?.firstName} ${orderUser?.lastName}`}</h6>
                     </div>
                     <div className="box my-0 p-0">
                        <h6>{`Email : ${orderUser?.email}`}</h6>
                     </div>
                     <div className="box my-0 p-0">
                        <h6>{`Phone number : ${orderUser?.phoneNumber}`}</h6>
                     </div>
                  </div>
               </div>
               <div className="info payment-info py-0 px-1">
                  <div className="head py-0">
                     <h5>Payment Information</h5>
                  </div>
                  <div className="boxes">
                     <div className="box my-0 p-0">
                        <h6>Payment Method</h6>
                        <small>{order?.paymentMethod}</small>
                        {!order.isPaid &&
                           order?.paymentMethod === 'Pay with Cards' && (
                              <div className="my-0">
                                 <button className="btn btn-secondary">
                                    Pay now
                                 </button>
                              </div>
                           )}
                     </div>
                     <div className="box my-0 p-0">
                        <h6>Payment Details</h6>
                        <small>Total Price : #{order?.totalPrice}</small>
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
                     {msg && <ErrorMessageBox msg={msg} />}
                     <div className="box my-0">
                        {!order.isPaid ? (
                           <button
                              onClick={() => dispatch(payOrder(order?._id))}
                              className="btn btn-secondary"
                           >
                              {loading ? <SmallWhiteSpinner /> : 'Mark as paid'}
                           </button>
                        ) : (
                           !order.isDelivered && (
                              <button
                                 onClick={() =>
                                    dispatch(deliverOrder(order?._id))
                                 }
                                 className="btn btn-secondary"
                              >
                                 {loadingDeliver ? (
                                    <SmallWhiteSpinner />
                                 ) : (
                                    'Mark as Delivered'
                                 )}
                              </button>
                           )
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminOrderDetailsInfo;
