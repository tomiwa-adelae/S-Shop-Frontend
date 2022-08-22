import HomeCategories from '../components/HomeComponents/HomeCategories';
import HomeLatestProducts from '../components/HomeComponents/HomeLatestProducts';
import HomeMostOrderedProducts from '../components/HomeComponents/HomeMostOrderedProducts';
import HomePopularProducts from '../components/HomeComponents/HomePopularProducts';
import ProductCarousel from '../components/ProductCarousel';

export default function Home() {
   return (
      <div className="homepage">
         <ProductCarousel />
         <HomeCategories />
         <HomePopularProducts />
         <HomeLatestProducts />
         <HomeMostOrderedProducts />
      </div>
   );
}
