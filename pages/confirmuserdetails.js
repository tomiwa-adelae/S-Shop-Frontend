import React from 'react';
import ConfirmUserDetailsForm from '../components/ConfirmUserDetailsComponents/ConfirmUserDetailsForm';
import ConfirmUserDetailsHead from '../components/ConfirmUserDetailsComponents/ConfirmUserDetailsHead';

const confirmuserdetails = () => {
   return (
      <div className="confirm-user-details-page">
         <div className="container section">
            <ConfirmUserDetailsHead />
            <ConfirmUserDetailsForm />
         </div>
      </div>
   );
};

export default confirmuserdetails;
