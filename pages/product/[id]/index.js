import ProductWrapper from '../../../components/ProductPageComponents/ProductWrapper';
import BackBtn from '../../../components/BackBtn';

const product = () => {
   return (
      <div className="product-page page">
         <BackBtn to="/" />
         <ProductWrapper />
      </div>
   );
};

export default product;
