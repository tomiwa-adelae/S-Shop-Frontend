import React from 'react';
import FrequentlyAskedQuestions from '../components/SellingDashboardComponents/FrequentlyAskedQuestions';
import LearnBasics from '../components/SellingDashboardComponents/LearnBasics';
import SellingDashboardShowcase from '../components/SellingDashboardComponents/SellingDashboardShowcase';

const sellingdashboard = () => {
   return (
      <div className="selling-dashboard-page">
         <SellingDashboardShowcase />
         <LearnBasics />
         <FrequentlyAskedQuestions />
      </div>
   );
};

export default sellingdashboard;
