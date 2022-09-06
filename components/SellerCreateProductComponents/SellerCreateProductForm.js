import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { useDropzone } from 'react-dropzone';
import { SmallWhiteSpinner } from '../Spinner';
import { CLEAR_ERRORS } from '../../store/constants/errorConstants';
import { createProduct } from '../../store/actions/sellerProductsActions';
import BackBtn from '../BackBtn';
import Link from 'next/link';

const SellerCreateProductForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [brand, setBrand] = useState('');
   const [category, setCategory] = useState('all');
   const [productImage, setProductImage] = useState(
      'https://thumbs.dreamstime.com/b/simple-vector-red-scratch-rubber-stamp-sample-transparent-effect-background-155834864.jpg'
   );

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const sellerCreateProductState = useSelector(
      (state) => state.sellerCreateProduct
   );
   const { loading, product, success } = sellerCreateProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller) {
         router.push('/loginseller?redirect=sellercreateproduct');
      }
   }, [router, seller]);

   useEffect(() => {
      setBrand(seller?.brandName);

      if (seller) {
         setName('');
         setPrice('');
         setDescription('');
         setCategory('');
      }
   }, [dispatch, product]);

   useEffect(() => {
      dispatch({ type: CLEAR_ERRORS });
   }, [dispatch]);

   const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
         const reader = new FileReader();

         reader.readAsDataURL(file);
         reader.onload = () => {
            const binaryStr = reader.result;

            setProductImage(binaryStr);
         };
      });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      const productDetails = {
         name,
         price,
         description,
         brand: brand || 'S-Shop',
         productImage,
         category: category || 'all',
      };

      dispatch(createProduct(productDetails));
   };

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <>
         <BackBtn to="sellerproducts" />
         <div className="seller-create-product-form section-small">
            <div className="container">
               <div className="head py-1">
                  <h4>S-Shop product</h4>
               </div>
               <div className="intro">
                  <p className="lead">Create a product now</p>
               </div>
               <form onSubmit={handleSubmit}>
                  <div>
                     <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name *"
                     />
                  </div>
                  <div>
                     <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        placeholder="Price *"
                     />
                  </div>
                  <div>
                     <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Product description"
                        name="description"
                        cols="30"
                        rows="10"
                     ></textarea>
                  </div>
                  <div>
                     <input
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        type="text"
                        placeholder="Brand"
                     />
                  </div>
                  <div>
                     <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name="variation"
                        id="varaition"
                     >
                        <option value="all">All</option>
                        <option value="shoes">Shoes</option>
                        <option value="clothes">clothes</option>
                        <option value="bags">bags</option>
                        <option value="food">food</option>
                        <option value="electronics">electronics</option>
                     </select>
                  </div>
                  <div>
                     <label>Product Image</label>
                  </div>

                  <div className="preview-file">
                     {productImage && (
                        <>
                           <div>
                              <img src={productImage} alt="" />
                           </div>
                           <span className="btn btn-secondary m-0">
                              <label htmlFor="productImage">Change Image</label>
                           </span>
                           <span
                              onClick={() => setProductImage(null)}
                              className="btn btn-danger my-0"
                           >
                              Delete
                           </span>
                        </>
                     )}
                  </div>
                  <div
                     {...getRootProps()}
                     className={isDragActive ? 'modal-active' : 'upload-modal'}
                  >
                     <div>
                        <input id="productImage" {...getInputProps()} />
                     </div>

                     <small>Drap and drop or click to browse a file</small>
                  </div>
                  {success && (
                     <SuccessMessageBox msg="Product updated successfully! Click on the back button to go back" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Create product'}
                     </button>
                     {success && (
                        <Link href="/sellerproducts">
                           <button className="btn btn-secondary mx-1">
                              Go back to products
                           </button>
                        </Link>
                     )}
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default SellerCreateProductForm;
