import ProductDescription from '../../../components/ProductPageComponents/ProductDescription';
import ProductMoreProductFromBrand from '../../../components/ProductPageComponents/ProductMoreProductFromBrand';
import ProductReview from '../../../components/ProductPageComponents/ProductReview';
import ProductShowcase from '../../../components/ProductPageComponents/ProductShowcase';
import SimilarProducts from '../../../components/ProductPageComponents/SimilarProducts';
import { server } from '../../../config/server';

const product = ({ product, brandProducts, similarProducts }) => {
   return (
      <div className="product-page">
         <ProductShowcase product={product} />
         <ProductDescription product={product} />
         <ProductMoreProductFromBrand
            product={product}
            brandProducts={brandProducts}
         />
         <ProductReview />
         <SimilarProducts product={product} similarProducts={similarProducts} />
      </div>
   );
};

export const getStaticProps = async (context) => {
   // Get current product
   const res = await fetch(`${server}/api/products/${context.params.id}`);

   const product = await res.json();

   // Get brand products
   const results = await fetch(
      `${server}/api/products/more/${product?.brand}/products/${context.params.id}`
   );

   const brandProducts = await results.json();

   // Get similar products
   const similar = await fetch(
      `${server}/api/products/similar/products/${product?.category}/${context.params.id}`
   );

   const similarProducts = await similar.json();

   return {
      props: {
         product,
         brandProducts,
         similarProducts,
      },
   };
};

export const getStaticPaths = async (context) => {
   const res = await fetch(`${server}/api/products`);

   const products = await res.json();

   const ids = products.map((product) => product._id);
   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

   return {
      paths,
      fallback: false,
   };
};

export default product;
