import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSimilarProducts } from '../../store/actions/orderActions';
import { SuccessMessageBox } from '../MessageBox';
import Rating from '../Rating';
import { PrimarySpinner } from '../Spinner';

const OrderSimilarProducts = ({ product }) => {
   const dispatch = useDispatch();

   const orderSimilarProductsState = useSelector(
      (state) => state.orderSimilarProducts
   );
   const { loading, products } = orderSimilarProductsState;

   useEffect(() => {
      dispatch(getOrderSimilarProducts(product.category, product._id));
   }, [dispatch, product]);

   return (
      <div className="similar-products section">
         <div className="container">
            <div className="head py-1">
               <h4>More Products</h4>
               <button className="btn btn-primary">See all</button>
            </div>

            {loading && <PrimarySpinner />}
            <div className="products-boxes">
               {products?.length === 0 && (
                  <SuccessMessageBox
                     msg={`There are no other products in ${product?.category} category`}
                  />
               )}
               {products?.map((product) => (
                  <Link
                     key={product._id}
                     href="/product/[id]"
                     as={`/product/${product._id}`}
                  >
                     <div className="box">
                        <div className="img">
                           <img src={product.image} alt={product.name} />
                        </div>
                        <div className="details p-1">
                           <h5 className="py-0">
                              {product.name.length >= 15
                                 ? `${product.name.substring(0, 16)}...`
                                 : product.name}
                           </h5>
                           <Rating rating={product?.rating} />
                           <h5 className="py-0">#{product?.price}</h5>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default OrderSimilarProducts;
