import Link from 'next/link';
import Rating from '../Rating';
import VariationClotheBox from '../VariationClotheBox';
import VariationShoeBox from '../VariationShoeBox';

const ProductShowcase = ({ product }) => {
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
