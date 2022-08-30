import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { createProductReview } from '../../store/actions/productActions';
import Rating from '../Rating';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const ProductReview = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [rating, setRating] = useState('');
   const [comment, setComment] = useState('');

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const createReviewState = useSelector((state) => state.createReview);
   const { loading } = createReviewState;

   const handleSubmit = (e) => {
      e.preventDefault();

      const reviewObj = {
         rating,
         comment,
         firstName: user?.firstName,
         lastName: user?.lastName,
      };

      dispatch(createProductReview(router.query.id, reviewObj));
   };

   return (
      <div className="product-review section">
         <div className="container">
            <div className="wrapper">
               <div className="review-boxes">
                  <div className="head py-1">
                     <h4>Customer feedbacks and reviews</h4>
                     <button className="btn btn-white">See all</button>
                  </div>
                  <div className="box p-1 my-0">
                     <div className="user my-0">
                        <FaUserAlt className="user-icon mx-0" />
                        <h5>Adelae Adetomiwa</h5>
                     </div>
                     <div className="rating">
                        <Rating />
                     </div>
                     <div className="comment my-0">
                        <p>
                           Thick material and coupled with the inner lining made
                           it comfortable to wear for long hours without skin
                           irritation. Would recommend Large size for a lady of
                           size 12 as the XL I ordered for was a lot bigger on
                           me.
                        </p>
                     </div>
                     <div className="date">
                        <h6>24-08-2022</h6>
                     </div>
                  </div>
                  <div className="box p-1 my-0">
                     <div className="user my-0">
                        <FaUserAlt className="user-icon mx-0" />
                        <h5>Adelae Adetomiwa</h5>
                     </div>
                     <div className="rating">
                        <Rating />
                     </div>
                     <div className="comment my-0">
                        <p>
                           Thick material and coupled with the inner lining made
                           it comfortable to wear for long hours without skin
                           irritation. Would recommend Large size for a lady of
                           size 12 as the XL I ordered for was a lot bigger on
                           me.
                        </p>
                     </div>
                     <div className="date">
                        <h6>24-08-2022</h6>
                     </div>
                  </div>
                  <div className="box p-1 my-0">
                     <div className="user my-0">
                        <FaUserAlt className="user-icon mx-0" />
                        <h5>Adelae Adetomiwa</h5>
                     </div>
                     <div className="rating">
                        <Rating />
                     </div>
                     <div className="comment my-0">
                        <p>
                           Thick material and coupled with the inner lining made
                           it comfortable to wear for long hours without skin
                           irritation. Would recommend Large size for a lady of
                           size 12 as the XL I ordered for was a lot bigger on
                           me.
                        </p>
                     </div>
                     <div className="date">
                        <h6>24-08-2022</h6>
                     </div>
                  </div>
                  <div className="box p-1 my-0">
                     <div className="user my-0">
                        <FaUserAlt className="user-icon mx-0" />
                        <h5>Adelae Adetomiwa</h5>
                     </div>
                     <div className="rating">
                        <Rating />
                     </div>
                     <div className="comment my-0">
                        <p>
                           Thick material and coupled with the inner lining made
                           it comfortable to wear for long hours without skin
                           irritation. Would recommend Large size for a lady of
                           size 12 as the XL I ordered for was a lot bigger on
                           me.
                        </p>
                     </div>
                     <div className="date">
                        <h6>24-08-2022</h6>
                     </div>
                  </div>
               </div>
               <div className="comment-section">
                  <div className="head py-0">
                     <h4>Write a customer review</h4>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <div>
                        <select
                           value={rating}
                           required
                           onChange={(e) => setRating(e.target.value)}
                           name="rating"
                           id="rating"
                        >
                           <option value="">Select...</option>
                           <option value="1">1 - Poor</option>
                           <option value="2">2 - Fair</option>
                           <option value="3">3 - Good</option>
                           <option value="4">4 - Very Good</option>
                           <option value="5">5 - Excellent</option>
                        </select>
                     </div>
                     <div>
                        <textarea
                           name="comment"
                           required
                           placeholder="Write comment..."
                           id="comment"
                           cols="30"
                           rows="10"
                           value={comment}
                           onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                     </div>
                     {msg && <ErrorMessageBox msg={msg} />}
                     <div>
                        <button className="btn btn-primary">
                           {loading ? <SmallWhiteSpinner /> : 'Submit'}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductReview;
