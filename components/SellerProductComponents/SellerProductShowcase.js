import Link from 'next/link';
import Rating from '../Rating';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SellerDeleteProductModal from './SellerDeleteProductModal';
import { useState } from 'react';

const SellerProductShowcase = ({ product }) => {
   const router = useRouter();

   const [deleteModal, setDeleteModal] = useState(false);

   const sellerDeleteProductState = useSelector(
      (state) => state.sellerDeleteProduct
   );
   const { success } = sellerDeleteProductState;

   useEffect(() => {
      if (success) {
         router.push('/sellerproducts');
      }
   }, [success, router]);

   return (
      <div className="product-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/category/${product?.category}`}>
                           <span>{product?.category}</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link
                           href="/brand/[name]"
                           as={`/brand/${product?.brand}`}
                        >
                           <span>{product?.brand}</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/product/${product?._id}`}>
                           <span>{product?.name}</span>
                        </Link>
                     </h6>
                  </div>
                  <h4>{product?.name}</h4>
                  <h5 className="py-1">
                     {product && `Brand: ${product.brand}`}
                  </h5>
                  <Rating rating={product?.rating} />
                  <h3>#{product?.price}</h3>
               </div>
               <div className="box img">
                  <img src={product?.productImage} alt={product?.name} />
               </div>
            </div>
            <div className="btns my-1">
               <Link
                  href="/sellereditproduct/[id]"
                  as={`/sellereditproduct/${product?._id}`}
               >
                  <button className="btn btn-primary">Edit product</button>
               </Link>
               <button
                  onClick={() => setDeleteModal(true)}
                  className="btn btn-danger"
               >
                  Delete product
               </button>
            </div>
         </div>
         {deleteModal && (
            <SellerDeleteProductModal
               closeModal={() => setDeleteModal(false)}
               product={product}
            />
         )}
      </div>
   );
};

export default SellerProductShowcase;
