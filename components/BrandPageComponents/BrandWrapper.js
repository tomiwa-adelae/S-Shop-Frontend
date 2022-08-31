import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandProducts } from '../../store/actions/productActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import BrandCarousel from './BrandCarousel';
import BrandIntro from './BrandIntro';
import BrandProducts from './BrandProducts';

const BrandWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const getAllBrandProductsState = useSelector(
      (state) => state.getAllBrandProducts
   );
   const { loading, brandProducts } = getAllBrandProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getAllBrandProducts(router.query.name));
   }, [dispatch, router]);
   return (
      <div className="brand-wrapper">
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         {loading ? (
            <PrimarySpinner />
         ) : (
            brandProducts && (
               <>
                  <BrandCarousel brandProducts={brandProducts} />
                  <BrandIntro brandName={router.query.name} />
                  <BrandProducts
                     brandProducts={brandProducts}
                     brandName={router.query.name}
                  />
               </>
            )
         )}
      </div>
   );
};

export default BrandWrapper;
