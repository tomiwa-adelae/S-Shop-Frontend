import Link from 'next/link';
import Rating from '../Rating';
import VariationClotheBox from '../VariationClotheBox';
import VariationShoeBox from '../VariationShoeBox';
import { useRouter } from 'next/router';

const ProductShowcase = ({ product }) => {
   const router = useRouter();

   const addToCart = () => {
      router.push(`/cart/?id=${product._id}&qty=1`);
   };

   return (
      <div className="product-showcase section">
         <div className="container">
            {product && (
               <div className="wrapper">
                  <div className="box details">
                     <div className="links-tags">
                        <h6 className="py-1">
                           <Link href="/">
                              <span>S-Shop</span>
                           </Link>{' '}
                           &gt;{' '}
                           <Link href={`/category/${product?.category}`}>
                              <span>{product?.category}</span>
                           </Link>{' '}
                           &gt;{' '}
                           <Link href="/">
                              <span>{product?.brand}</span>
                           </Link>{' '}
                           &gt;{' '}
                           <Link href="/">
                              <span>{product?.name}</span>
                           </Link>
                        </h6>
                     </div>
                     <h4>{product?.name}</h4>
                     <h5 className="py-1">
                        {product && `Brand: ${product.brand}`}
                     </h5>
                     <Rating rating={product?.rating} />
                     <h3>#{product?.price}</h3>

                     {/* Variation box */}
                     {/* For clothe */}
                     {product?.category === 'clothes' && (
                        <VariationClotheBox product={product} />
                     )}
                     {/* For Shoes */}
                     {product?.category === 'shoes' && (
                        <VariationShoeBox product={product} />
                     )}

                     {product?.category === 'bags' && (
                        <div>
                           <button
                              onClick={addToCart}
                              className="btn btn-primary"
                           >
                              Add to cart
                           </button>
                        </div>
                     )}

                     {product?.category === 'electronics' && (
                        <div>
                           <button
                              onClick={addToCart}
                              className="btn btn-primary"
                           >
                              Add to cart
                           </button>
                        </div>
                     )}

                     {product?.category === 'all' && (
                        <div>
                           <button
                              onClick={addToCart}
                              className="btn btn-primary"
                           >
                              Add to cart
                           </button>
                        </div>
                     )}
                  </div>
                  <div className="box img">
                     <img src={product?.image} alt={product?.name} />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default ProductShowcase;
