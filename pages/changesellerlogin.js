import ChangeSellerLoginForm from '../components/ChangeSellerLoginComponents/ChangeSellerLoginForm';
import { SellerNotificationBox } from '../components/SellerNotificationBox';

const changeSellerlogin = () => {
   return (
      <div className="change-seller-login-page">
         <SellerNotificationBox />
         <ChangeSellerLoginForm />
         <SellerNotificationBox />
      </div>
   );
};

export default changeSellerlogin;
