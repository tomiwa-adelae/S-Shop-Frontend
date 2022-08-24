import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Rating from '../Rating';

const ProductReview = () => {
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
                  <form>
                     <div>
                        <select name="rating" id="rating">
                           <option value="">Select...</option>
                           <option value="1">1 - Poor</option>
                           <option value="2">1 - Fair</option>
                           <option value="3">1 - Good</option>
                           <option value="4">1 - Very Good</option>
                           <option value="5">1 - Excellent</option>
                        </select>
                     </div>
                     <div>
                        <textarea
                           name="comment"
                           placeholder="Write comment..."
                           id="comment"
                           cols="30"
                           rows="10"
                        ></textarea>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductReview;
