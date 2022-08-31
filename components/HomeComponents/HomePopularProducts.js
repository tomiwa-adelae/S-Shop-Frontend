import Link from 'next/link';
import Rating from '../Rating';

const HomePopularProducts = ({ mostRatedProducts }) => {
   return (
      <div className="home-popular-products section">
         <div className="container">
            <div className="head py-1">
               <h4>Explore popular products</h4>
               {mostRatedProducts.length > 10 && (
                  <Link href="/popularproducts">
                     <button className="btn btn-primary">See all</button>
                  </Link>
               )}
            </div>
            <div className="products-boxes">
               {mostRatedProducts.slice(0, 10)?.map((product) => (
                  <div key={product?._id} className="box">
                     <div className="img">
                        <img src={product?.image} alt="" />
                     </div>
                     <div className="details p-1">
                        <h5 className="py-0">
                           {' '}
                           {product?.name.length >= 15
                              ? `${product?.name.substring(0, 16)}...`
                              : product?.name}
                        </h5>
                        <Rating rating={product?.rating} />
                        <h5 className="py-0">#{product?.price}</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HomePopularProducts;
