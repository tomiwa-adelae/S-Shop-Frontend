import Link from 'next/link';
import { SuccessMessageBox } from '../MessageBox';

const ProductMoreProductFromBrand = ({ brandProducts, product }) => {
   return (
      <div className="product-more-products-from-brand section">
         <div className="container">
            <div className="head py-1">
               <h4>More products from {product?.brand}</h4>
               <button className="btn btn-primary">See all</button>
            </div>
            <div className="products-boxes">
               {brandProducts.length === 0 && (
                  <SuccessMessageBox
                     msg={`${product?.brand} has no other products`}
                  />
               )}
               {brandProducts?.map((product) => (
                  <Link
                     key={product._id}
                     href="/product/[id]"
                     as={`/product/6304cef551918e7d2e8d7995`}
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

export default ProductMoreProductFromBrand;
