import React from 'react';

const SuccessMessageBox = ({ msg }) => {
   return (
      <div className="success-msg p-1">
         <h6>{msg}</h6>
      </div>
   );
};

export { SuccessMessageBox };
