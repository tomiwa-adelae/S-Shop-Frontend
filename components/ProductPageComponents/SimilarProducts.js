import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromCategory } from '../../store/actions/productActions';
import { SuccessMessageBox } from '../MessageBox';
import Rating from '../Rating';
import { PrimarySpinner } from '../Spinner';

const SimilarProducts = ({ product }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const getCategoryProductsState = useSelector(
      (state) => state.getCategoryProducts
   );
   const { loading, categoryProducts } = getCategoryProductsState;

   useEffect(() => {
      if (product) {
         dispatch(getProductsFromCategory(product.category, router.query.id));
      }
   }, [dispatch, router, product]);

   return (
      <div className="similar-products section">
         <div className="container">
            <div className="head py-1">
               <h4>Similar products</h4>
               <button className="btn btn-primary">See all</button>
            </div>

            <div className="products-boxes">
               {loading && <PrimarySpinner />}
               {categoryProducts?.length === 0 && (
                  <SuccessMessageBox
                     msg={`There are no other products in ${product?.category} category`}
                  />
               )}
               {categoryProducts?.map((product) => (
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

export default SimilarProducts;
