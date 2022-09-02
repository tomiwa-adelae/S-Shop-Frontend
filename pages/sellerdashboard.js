import React from 'react';
import SellerDashboardInfo from '../components/SellerDashboardComponents/SellerDashboardInfo';
import SellerDashboardShowcase from '../components/SellerDashboardComponents/SellerDashboardShowcase';
import { SellerNotificationBox } from '../components/SellerNotificationBox';

const sellerdashboard = () => {
   return (
      <div className="seller-dashboard-page">
         <SellerNotificationBox />
         <SellerDashboardShowcase />
         <SellerDashboardInfo />
         <SellerNotificationBox />
      </div>
   );
};

export default sellerdashboard;
