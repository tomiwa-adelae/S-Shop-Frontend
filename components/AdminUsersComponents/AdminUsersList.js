import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminOrders } from '../../store/actions/sellerOrderActions';
import { getAllUsers } from '../../store/actions/userSellerActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

const AdminUsersList = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const adminGetUsersState = useSelector((state) => state.adminGetUsers);
   const { loading, users } = adminGetUsersState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   useEffect(() => {
      if (!seller?.isAdmin) {
         router.push('/loginseller?redirect=adminusers');
      }

      dispatch(getAllUsers());
   }, [dispatch, seller, router]);

   console.log(users);

   return (
      <>
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         <div className="admin-users-list section-small">
            <div className="container">
               <div className="wrapper">
                  {loading && <PrimarySpinner />}
                  {users?.length === 0 && (
                     <SuccessMessageBox msg="There is no users yet!" />
                  )}

                  <div className="boxes">
                     {users?.map((user) => (
                        <div key={user._id} className="box my-0 p-0">
                           <div className="name">
                              <h5>
                                 {user.firstName} {user.lastName}
                              </h5>
                           </div>
                           <div className="email my-1">
                              <h5>{user.email}</h5>
                           </div>
                           <div>
                              <button className="btn btn-secondary">
                                 View {user.firstName}'s orders
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* <div className="boxes">
                     {orders?.slice(0, 10).map((order) => (
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
                                       <span>
                                          {order.orderItems[0].category ===
                                             'clothes' &&
                                             ` | Size: ${order.orderItems[0].size}`}
                                       </span>
                                       <span>
                                          {order.orderItems[0].category ===
                                             'shoes' &&
                                             ` | Size: ${order.orderItems[0].size}`}
                                       </span>
                                    </h6>
                                    <Link
                                       href="/adminorder/[id]"
                                       as={`/adminorder/${order?._id}`}
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
                  </div> */}
                  {/* {orders?.length !== 0 && orders?.length >= 10 && (
                     <Link href="/alladminorders">
                        <button className="btn btn-secondary">
                           See all orders
                        </button>
                     </Link>
                  )} */}
               </div>
            </div>
         </div>
      </>
   );
};

export default AdminUsersList;
