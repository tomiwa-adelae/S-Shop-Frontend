import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellers } from '../../store/actions/userSellerActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

const AdminSellersList = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const adminGetSellersState = useSelector((state) => state.adminGetSellers);
   const { loading, sellers } = adminGetSellersState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   useEffect(() => {
      if (!seller?.isAdmin) {
         router.push('/loginseller?redirect=adminsellers');
      }

      dispatch(getAllSellers());
   }, [dispatch, seller, router]);

   return (
      <>
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         <div className="admin-sellers-list section-small">
            <div className="container">
               <div className="wrapper">
                  {loading && <PrimarySpinner />}
                  {sellers?.length === 0 && (
                     <SuccessMessageBox msg="There is no sellers yet!" />
                  )}

                  <div className="boxes">
                     {sellers?.map((seller) => (
                        <div key={seller._id} className="box my-0">
                           <div className="img p-0">
                              <img
                                 src={seller.brandLogo}
                                 alt={seller.brandName}
                              />
                           </div>
                           <div className="name">
                              <h5>
                                 {seller.firstName} {seller.lastName}
                              </h5>
                           </div>
                           <div className="email my-1">
                              <h5>{seller.email}</h5>
                           </div>
                           <div className="email my-1">
                              <h5>{seller.brandName}</h5>
                           </div>
                           <Link
                              href="/adminseller/[id]"
                              as={`/adminseller/${seller?._id}`}
                           >
                              <div className="p-0">
                                 <button className="btn btn-secondary">
                                    View shop
                                 </button>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AdminSellersList;
