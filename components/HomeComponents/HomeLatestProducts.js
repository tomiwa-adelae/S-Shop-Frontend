import Link from 'next/link';
import Rating from '../Rating';
import { SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';

const HomeLatestProducts = ({ loading, latestProducts }) => {
   return (
      <div className="home-latest-products section">
         <div className="container">
            <div className="head py-1">
               <h4>Latest products</h4>
               {latestProducts?.length >= 10 && (
                  <Link href="/allproducts">
                     <button className="btn btn-primary">See all</button>
                  </Link>
               )}
            </div>

            {loading && <PrimarySpinner />}

            {latestProducts?.length === 0 && (
               <SuccessMessageBox msg="No products to display!" />
            )}

            <div className="products-boxes">
               {latestProducts?.slice(0, 10)?.map((product) => (
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

export default HomeLatestProducts;
