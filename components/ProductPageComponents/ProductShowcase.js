import Link from 'next/link';
import Rating from '../Rating';
import { useRouter } from 'next/router';
import BackBtn from '../BackBtn';

const ProductShowcase = ({ product }) => {
   const router = useRouter();

   const addToCart = () => {
      router.push(`/cart/?id=${product._id}&qty=1`);
   };

   return (
      <div className="product-showcase section">
         <div className="container">
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
                        <Link
                           href="/brand/[name]"
                           as={`/brand/${product?.brand}`}
                        >
                           <span>{product?.brand}</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/product/${product?._id}`}>
                           <span>{product?.name}</span>
                        </Link>
                     </h6>
                  </div>
                  <BackBtn to="/" />
                  <h4>{product?.name}</h4>
                  <h5 className="py-1">
                     {product && `Brand: ${product.brand}`}
                  </h5>
                  <Rating rating={product?.rating} />
                  <h3>#{product?.price}</h3>

                  <div>
                     <button onClick={addToCart} className="btn btn-primary">
                        Add to cart
                     </button>
                  </div>
               </div>
               <div className="box img">
                  <img src={product?.productImage} alt={product?.name} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductShowcase;
