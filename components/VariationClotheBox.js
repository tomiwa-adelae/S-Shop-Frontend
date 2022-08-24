import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const VariationClotheBox = () => {
   const [variations] = useState([
      { value: 's' },
      { value: 'm' },
      { value: 'l' },
      { value: 'xl' },
      { value: 'xxl' },
      { value: 'xxxl' },
   ]);

   const [openModal, setOpenModal] = useState(false);

   const [selectedVariation, setSelectedVariation] = useState('');

   return (
      <>
         <div className="variation-box section">
            <h5>Variation available</h5>
            <div className="boxes">
               {variations.map((variant, index) => (
                  <div
                     onClick={() => setOpenModal(!openModal)}
                     key={index}
                     className="box px-1 py-0  my-1 "
                  >
                     <h5>{variant.value}</h5>
                  </div>
               ))}
            </div>
         </div>
         {openModal && (
            <div className="modal">
               <div className="container p-1">
                  <div className="head py-1">
                     <h4>Please select variation</h4>
                     <span
                        onClick={() => setOpenModal(!openModal)}
                        className="p-0"
                     >
                        <GrClose size={30} />
                     </span>
                  </div>
                  <div className="sizes">
                     {variations.map((variant, index) => (
                        <div key={index} className="size my-0 px-1 py-0">
                           <div className="detail">
                              <h6>{variant.value}</h6>
                           </div>
                           <div className="icons">
                              <div className="minus p-0 mx-0">
                                 <AiOutlineMinus />
                              </div>
                              <h6>0</h6>
                              <div className="plus p-0 mx-0">
                                 <AiOutlinePlus />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default VariationClotheBox;
