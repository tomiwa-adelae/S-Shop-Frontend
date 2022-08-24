import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WhiteSpinner } from '../Spinner';

import { getLatestProducts } from '../../store/actions/productActions';
import Link from 'next/link';

const HomeLatestProducts = () => {
   const dispatch = useDispatch();

   const latestProductsState = useSelector((state) => state.getLatestProducts);
   const { loading, latestProducts } = latestProductsState;

   useEffect(() => {
      dispatch(getLatestProducts());
   }, [dispatch]);

   return (
      <div className="home-latest-products section">
         <div className="container">
            <div className="head py-1">
               <h4>Latest products</h4>
               <button className="btn btn-primary">See all</button>
            </div>
            {loading && <WhiteSpinner />}
            <div className="products-boxes">
               {latestProducts?.map((product) => (
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
                           <h5>
                              {product.name.length >= 15
                                 ? `${product.name.substring(0, 16)}...`
                                 : product.name}
                           </h5>
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

export default HomeLatestProducts;
