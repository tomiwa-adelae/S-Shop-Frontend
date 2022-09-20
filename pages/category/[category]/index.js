import BackBtn from '../../../components/BackBtn';
import CategoryIntro from '../../../components/CategoryPageComponents/CategoryIntro';
import CategoryProductCarousel from '../../../components/CategoryPageComponents/CategoryProductCarousel';
import CategoryProducts from '../../../components/CategoryPageComponents/CategoryProducts';
import { server } from '../../../config/server';

const category = ({ products }) => {
   return (
      <div className="category-page page">
         <BackBtn to="/" />
         <CategoryProductCarousel products={products} />
         {products.length !== 0 && <CategoryIntro />}

         <CategoryProducts products={products} />
      </div>
   );
};

export const getServerSideProps = async (context) => {
   const res = await fetch(
      `${server}/api/products/category/products/${context.params.category}`
   );

   const products = await res.json();

   return {
      props: {
         products,
      },
   };
};

export default category;
