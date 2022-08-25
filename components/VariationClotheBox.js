import React, { useState } from 'react';
import { useRouter } from 'next/router';

const VariationClotheBox = ({ product }) => {
   const router = useRouter();

   const [variationValue, setVariationValue] = useState('');

   const addToCart = () => {
      router.push(`/cart/?id=${product._id}&size=${variationValue}&qty=1`);
   };

   return (
      <div className="variation-box section">
         <h5>Variation available</h5>
         <div className="boxes">
            <div>
               <select
                  value={variationValue}
                  onChange={(e) => setVariationValue(e.target.value)}
                  name="variation"
                  id="varaition"
               >
                  <option value="">Select size...</option>
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                  <option value="xxl">xxl</option>
                  <option value="xxxl">xxxl</option>
               </select>
            </div>
            <div>
               <button
                  onClick={addToCart}
                  disabled={!variationValue}
                  className="btn btn-primary"
               >
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default VariationClotheBox;
