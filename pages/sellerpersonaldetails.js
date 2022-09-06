import SellerPersonalDetailsForm from '../components/SellerPersonalDetailsComponents/SellerPersonalDetailsForm';
import { SellerNotificationBox } from '../components/SellerNotificationBox';

const sellerpersonaldetails = () => {
   return (
      <div className="seller-personal-details-page">
         <SellerNotificationBox />
         <SellerPersonalDetailsForm />
         <SellerNotificationBox />
      </div>
   );
};

export default sellerpersonaldetails;
