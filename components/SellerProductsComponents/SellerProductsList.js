import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerProducts } from '../../store/actions/sellerProductsActions';
import { SELLER_CREATE_PRODUCT_RESET } from '../../store/constants/sellerProductConstants';
import BackBtn from '../BackBtn';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

const SellerProductsList = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const sellerProductsState = useSelector((state) => state.getSellerProducts);
   const { loading, products } = sellerProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   useEffect(() => {
      if (!seller) {
         router.push('/loginseller?redirect=sellerproducts');
      }

      dispatch({ type: SELLER_CREATE_PRODUCT_RESET });

      dispatch(getSellerProducts());
   }, [dispatch, seller, router]);

   return (
      <>
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         <BackBtn to="sellerdashboard" />
         <div className="seller-products-list section-small">
            <div className="container">
               <div className="wrapper">
                  {loading && <PrimarySpinner />}
                  {products?.length === 0 && (
                     <SuccessMessageBox msg="You have no product! List a new product now" />
                  )}
                  <div className="boxes">
                     {products?.map((product) => (
                        <div key={product._id} className="box my-0">
                           <div className="img">
                              <img
                                 src={product.productImage}
                                 alt={product.name}
                              />
                           </div>
                           <div className="details">
                              <div className="col-one p-0">
                                 <div className="name">
                                    <Link
                                       href="/product/[id]"
                                       as={`/product/${product._id}`}
                                    >
                                       <h5>
                                          {product.name.length >= 50
                                             ? `${product.name.substring(
                                                  0,
                                                  51
                                               )}...`
                                             : product.name}
                                       </h5>
                                    </Link>
                                    <h6 className="my-0">
                                       Brand:{' '}
                                       <Link
                                          href="/brand/[name]"
                                          as={`/brand/${product?.brand}`}
                                       >
                                          {product.brand}
                                       </Link>
                                    </h6>
                                    <h6>
                                       Category:{' '}
                                       <Link
                                          href={`/category/${product?.category}`}
                                       >
                                          {product.category}
                                       </Link>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-two p-0">
                                 <h4># {product.price}</h4>
                                 <Link
                                    href="/sellerproduct/[id]"
                                    as={`/sellerproduct/${product._id}`}
                                 >
                                    <button className="btn btn-secondary my-0">
                                       See details
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  {products?.length !== 0 && products?.length >= 10 && (
                     <Link href="/allsellerproducts">
                        <button className="btn btn-secondary">
                           See all products
                        </button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default SellerProductsList;
