import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMostRatedProducts } from '../../store/actions/productActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import PopularProductsCarousel from '../PopularProductsComponents/PopularProductsCarousel';
import PopularProductsIntro from '../PopularProductsComponents/PopularProductsIntro';
import PopularProductsItems from '../PopularProductsComponents/PopularProductsItems';

const PopularProductsWrapper = () => {
   const dispatch = useDispatch();

   const mostRatedProductsState = useSelector(
      (state) => state.getMostRatedProducts
   );
   const { loading, mostRatedProducts } = mostRatedProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getMostRatedProducts());
   }, [dispatch]);
   return (
      <div className="popular-products-wrapper">
         <div className="container section-small">
            {msg && <ErrorMessageBox msg={msg} />}
         </div>
         {loading ? (
            <PrimarySpinner />
         ) : mostRatedProducts?.length !== 0 ? (
            <>
               <PopularProductsCarousel products={mostRatedProducts} />
               <PopularProductsIntro />
               <PopularProductsItems products={mostRatedProducts} />
            </>
         ) : (
            <div className="container">
               <SuccessMessageBox msg="No products to display!" />
            </div>
         )}
      </div>
   );
};

export default PopularProductsWrapper;
