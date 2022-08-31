import HomeCategories from '../components/HomeComponents/HomeCategories';
import HomeLatestProducts from '../components/HomeComponents/HomeLatestProducts';
import HomeMostOrderedProducts from '../components/HomeComponents/HomeMostOrderedProducts';
import HomePopularProducts from '../components/HomeComponents/HomePopularProducts';
import HomeProductCarousel from '../components/HomeComponents/HomeProductCarousel';
import { server } from '../config/server';

export default function Home({ mostRatedProducts, products }) {
   return (
      <div className="homepage">
         <HomeProductCarousel mostRatedProducts={mostRatedProducts} />
         <HomeCategories />
         <HomePopularProducts mostRatedProducts={mostRatedProducts} />
         <HomeLatestProducts latestProducts={products} />
         {/* <HomeMostOrderedProducts /> */}
      </div>
   );
}

export const getStaticProps = async () => {
   const res = await fetch(`${server}/api/products/most/rated/products`);

   const mostRatedProducts = await res.json();

   const resProducts = await fetch(`${server}/api/products`);

   const products = await resProducts.json();

   return {
      props: {
         mostRatedProducts,
         products,
      },
   };
};
