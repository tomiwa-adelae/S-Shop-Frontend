import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BackBtn from '../BackBtn';
import Rating from '../Rating';

const AllProductsItems = ({ products }) => {
   const router = useRouter();
   return (
      <div className="all-products-items section">
         <div className="container">
            <BackBtn to="/" />
            <div className="head py-1">
               <h4>All Products</h4>
            </div>
            <div className="products-boxes">
               {products?.map((product) => (
                  <Link
                     key={product._id}
                     href="/product/[id]"
                     as={`/product/${product._id}`}
                  >
                     <div className="box">
                        <div className="img">
                           <img src={product.productImage} alt={product.name} />
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

export default AllProductsItems;
