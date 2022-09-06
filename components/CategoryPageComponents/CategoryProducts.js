import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Rating from '../Rating';
import { SuccessMessageBox } from '../MessageBox';
import BackBtn from '../BackBtn';

const CategoryProducts = ({ products }) => {
   const router = useRouter();
   return (
      <div className="category-products section">
         <div className="container">
            <BackBtn to="" />
            <div className="head py-1">
               <h4>{router.query.category}</h4>
            </div>
            <div className="products-boxes">
               {products?.length === 0 && (
                  <SuccessMessageBox msg="Category does not exist!" />
               )}
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

export default CategoryProducts;
