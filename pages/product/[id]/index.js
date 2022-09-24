import ProductWrapper from '../../../components/ProductPageComponents/ProductWrapper';
import BackBtn from '../../../components/BackBtn';
import Meta from '../../../components/Meta';

const product = () => {
   return (
      <div className="product-page page">
         <Meta title="Product | S-Shop" />
         <BackBtn to="/" />
         <ProductWrapper />
      </div>
   );
};

export default product;
