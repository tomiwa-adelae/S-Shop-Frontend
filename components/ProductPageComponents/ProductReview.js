import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { createProductReview } from '../../store/actions/productActions';
import Rating from '../Rating';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';
import dayjs from 'dayjs';
import Link from 'next/link';

const ProductReview = ({ product }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [rating, setRating] = useState('');
   const [comment, setComment] = useState('');

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const createReviewState = useSelector((state) => state.createReview);
   const { loading, success } = createReviewState;

   useEffect(() => {
      if (success) {
         setRating('');
         setComment('');
      }
   }, [success]);

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
                  </div>
                  {product.reviews.length === 0 && (
                     <SuccessMessageBox msg="No customer reviews! Write one now" />
                  )}
                  {product.reviews.slice(0, 5)?.map((review) => (
                     <div key={review._id} className="box p-1 my-0">
                        <div className="user my-0">
                           <FaUserAlt className="user-icon mx-0" />
                           <h5>{review.name}</h5>
                        </div>
                        <div className="rating">
                           <Rating rating={review.rating} />
                        </div>
                        <div className="comment my-0">
                           <p>{review.comment}</p>
                        </div>
                        <div className="date">
                           <h6>
                              {dayjs(review.createdAt).format('DD-MM-YYYY')}
                           </h6>
                        </div>
                     </div>
                  ))}
               </div>
               {user ? (
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
                        {success && (
                           <SuccessMessageBox msg="Product reviewed successfully!" />
                        )}
                        <div>
                           <button className="btn btn-primary">
                              {loading ? <SmallWhiteSpinner /> : 'Submit'}
                           </button>
                        </div>
                     </form>
                  </div>
               ) : (
                  <div className="p-1 my-0 primary-msg">
                     <h6>
                        Login to leave a customer review.{' '}
                        <Link
                           href={`/login?redirect=product/${router.query.id}`}
                        >
                           Login now
                        </Link>
                     </h6>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductReview;
