import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromBrand } from '../../store/actions/productActions';
import { SuccessMessageBox } from '../MessageBox';
import Rating from '../Rating';
import { PrimarySpinner } from '../Spinner';

const ProductMoreProductFromBrand = ({ product }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const getBrandProductsState = useSelector((state) => state.getBrandProducts);
   const { loading, brandProducts } = getBrandProductsState;

   useEffect(() => {
      if (product) {
         dispatch(getProductsFromBrand(product.brand, router.query.id));
      }
   }, [dispatch, router, product]);

   return (
      <div className="product-more-products-from-brand section">
         <div className="container">
            <div className="head py-1">
               <h4>More products from {product?.brand}</h4>
               <Link href="/brand/[name]" as={`/brand/${product?.brand}`}>
                  <button className="btn btn-primary">See all</button>
               </Link>
            </div>
            <div className="products-boxes">
               {loading && <PrimarySpinner />}
               {brandProducts?.length === 0 && (
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

export default ProductMoreProductFromBrand;
