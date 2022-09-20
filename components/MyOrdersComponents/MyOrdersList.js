import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../../store/actions/orderActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

const MyOrdersList = () => {
   const dispatch = useDispatch();

   const myOrdersListState = useSelector((state) => state.getMyOrders);
   const { loading, orders } = myOrdersListState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getMyOrders());
   }, [dispatch]);

   return (
      <>
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         <div className="my-orders-list section-small">
            <div className="container">
               <div className="wrapper">
                  {loading && <PrimarySpinner />}
                  {orders?.length === 0 && (
                     <SuccessMessageBox msg="Your order list is empty! Shop now" />
                  )}
                  <div className="boxes">
                     {orders?.map((order) => (
                        <div key={order._id} className="box my-0">
                           <div className="img">
                              <img
                                 src={order.orderItems[0].productImage}
                                 alt={order.orderItems[0].name}
                              />
                           </div>
                           <div className="details">
                              <div className="col-one p-0">
                                 <div className="name">
                                    <h5>
                                       {order.orderItems[0].name.length >= 60
                                          ? `${order.orderItems[0].name.substring(
                                               0,
                                               60
                                            )}...`
                                          : order.orderItems[0].name}
                                    </h5>
                                    <h6 className="my-0 brand">
                                       Brand: {order.orderItems[0].brand}
                                    </h6>
                                    <Link
                                       href="/order/[id]"
                                       as={`/order/${order?._id}`}
                                    >
                                       <button className="btn btn-grey">
                                          Details
                                       </button>
                                    </Link>
                                 </div>
                              </div>
                              <div className="col-two p-0">
                                 {order.isPaid ? (
                                    <span className="badge badge-secondary my-0">
                                       Paid
                                    </span>
                                 ) : (
                                    <span className="badge badge-danger my-0">
                                       Not Paid
                                    </span>
                                 )}
                                 {order.isDelivered ? (
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
         </div>
      </>
   );
};

export default MyOrdersList;
