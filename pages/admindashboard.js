import React from 'react';
import AdminDashboardInfo from '../components/AdminDashboardComponents/AdminDashboardInfo';
import AdminDashboardShowcase from '../components/AdminDashboardComponents/AdminDashboardShowcase';
import { AdminNotificationBox } from '../components/AdminNotificationBox';

const admindashboard = () => {
   return (
      <div className="admin-dashboard-page">
         <AdminNotificationBox />
         <AdminDashboardShowcase />
         <AdminDashboardInfo />
         <AdminNotificationBox />
      </div>
   );
};

export default admindashboard;
