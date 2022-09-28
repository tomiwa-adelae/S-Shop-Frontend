import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import AllProductsCarousel from './AllProductsCarousel';
import AllProductsIntro from './AllProductsIntro';
import AllProductsItems from './AllProductsItems';

const AllProductsWrapper = () => {
   const dispatch = useDispatch();

   const getAllProductsState = useSelector((state) => state.getProducts);
   const { loading, products } = getAllProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);
   return (
      <div className="all-products-wrapper">
         <div className="container section-small">
            {msg && <ErrorMessageBox msg={msg} />}
         </div>
         {loading ? (
            <PrimarySpinner />
         ) : (
            products && (
               <>
                  <AllProductsCarousel products={products} />
                  <AllProductsIntro />
                  <AllProductsItems products={products} />
               </>
            )
         )}
      </div>
   );
};

export default AllProductsWrapper;
