import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import Rating from '../Rating';
import { PrimarySpinner } from '../Spinner';
import { SuccessMessageBox } from '../MessageBox';

const SearchProducts = () => {
   const dispatch = useDispatch();

   const productsState = useSelector((state) => state.getProducts);
   const { products, loading } = productsState;

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);
   return (
      <div className="search-products section">
         <div className="container">
            <div className="head py-1">
               <h4>All products</h4>
            </div>
            <div className="products-boxes">
               {loading && <PrimarySpinner />}
               {products?.length === 0 && (
                  <SuccessMessageBox msg={`No product found!`} />
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

export default SearchProducts;
