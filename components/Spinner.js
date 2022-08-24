import React from 'react';

const PrimarySpinner = () => {
   return (
      <div className="spinner-wrapper">
         <div className="spinner"></div>
      </div>
   );
};

const WhiteSpinner = () => {
   return (
      <div className="spinner-wrapper">
         <div className="spinner-white"></div>
      </div>
   );
};

export { PrimarySpinner, WhiteSpinner };
