import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts } from '../../store/actions/productActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import CategoryProductCarousel from './CategoryProductCarousel';
import CategoryIntro from './CategoryIntro';
import CategoryProducts from './CategoryProducts';

const CategoryWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const getCategoryProductsState = useSelector(
      (state) => state.getAllCategoryProducts
   );
   const { loading, products } = getCategoryProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getCategoryProducts(router.query.category));
   }, [dispatch, router]);
   return (
      <div className="category-products-wrapper">
         <div className="container section-small">
            {msg && <ErrorMessageBox msg={msg} />}
         </div>
         {loading ? (
            <PrimarySpinner />
         ) : (
            products && (
               <>
                  <CategoryProductCarousel products={products} />
                  <CategoryIntro />
                  <CategoryProducts products={products} />
               </>
            )
         )}
      </div>
   );
};

export default CategoryWrapper;
