import React from 'react';
import AdminSellersIntro from '../components/AdminSellersComponents/AdminSellersIntro';
import AdminSellersList from '../components/AdminSellersComponents/AdminSellersList';

const adminsellers = () => {
   return (
      <div className="admin-sellers-page">
         <AdminSellersIntro />
         <AdminSellersList />
      </div>
   );
};

export default adminsellers;
