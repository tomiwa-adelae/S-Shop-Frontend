import React, { useState } from 'react';

const VariationShoeBox = () => {
   const [variations] = useState([
      { value: 'eu 38' },
      { value: 'eu 39' },
      { value: 'eu 40' },
      { value: 'eu 41' },
      { value: 'eu 42' },
      { value: 'eu 43' },
      { value: 'eu 44' },
      { value: 'eu 45' },
   ]);

   return (
      <div className="variation-box section">
         <h5>Variation available</h5>
         <div className="boxes">
            {variations.map((variant, index) => (
               <div key={index} className="box px-1 py-0  my-1 ">
                  <h5>{variant.value}</h5>
               </div>
            ))}
         </div>
      </div>
   );
};

export default VariationShoeBox;
