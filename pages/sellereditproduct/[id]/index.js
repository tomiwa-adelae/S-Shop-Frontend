import React from 'react';
import SellerEditProductWrapper from '../../../components/SellerEditProductComponents/SellerEditProductWrapper';
import { SellerNotificationBox } from '../../../components/SellerNotificationBox';

const sellereditproduct = () => {
   return (
      <div className="seller-edit-product-page">
         <SellerNotificationBox />
         <SellerEditProductWrapper />
         <SellerNotificationBox />
      </div>
   );
};

export default sellereditproduct;
