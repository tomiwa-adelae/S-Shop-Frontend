import React, { useState } from 'react';
import { useRouter } from 'next/router';

const VariationShoeBox = ({ product }) => {
   const router = useRouter();

   const [variationValue, setVariationValue] = useState('');
   const addToCart = () => {
      router.push(`/cart/?id=${product._id}&size=${variationValue}`);
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
                  <option value="eu 38">eu 38</option>
                  <option value="eu 39">eu 39</option>
                  <option value="eu 40">eu 40</option>
                  <option value="eu 41">eu 41</option>
                  <option value="eu 42">eu 42</option>
                  <option value="eu 43">eu 43</option>
                  <option value="eu 44">eu 44</option>
                  <option value="eu 45">eu 45</option>
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

export default VariationShoeBox;
