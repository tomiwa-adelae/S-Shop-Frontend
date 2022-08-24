import HomeCategories from '../components/HomeComponents/HomeCategories';
import HomeLatestProducts from '../components/HomeComponents/HomeLatestProducts';
import HomeMostOrderedProducts from '../components/HomeComponents/HomeMostOrderedProducts';
import HomePopularProducts from '../components/HomeComponents/HomePopularProducts';
import HomeProductCarousel from '../components/HomeComponents/HomeProductCarousel';

export default function Home() {
   return (
      <div className="homepage">
         <HomeProductCarousel />
         <HomeCategories />
         {/* <HomePopularProducts /> */}
         <HomeLatestProducts />
         {/* <HomeMostOrderedProducts /> */}
      </div>
   );
}
