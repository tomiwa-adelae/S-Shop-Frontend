import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryProducts = ({ products }) => {
   const router = useRouter();
   return (
      <div className="category-products section">
         <div className="container">
            <div className="head py-1">
               <h4>All {router.query.category}</h4>
               <button className="btn btn-primary">See all</button>
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

export default CategoryProducts;
