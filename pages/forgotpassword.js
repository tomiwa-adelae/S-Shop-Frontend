import ForgotPasswordForm from '../components/ForgotPasswordPageComponents/ForgotPasswordForm';
import Meta from '../components/Meta';

const forgotpassword = () => {
   return (
      <div className="forgot-password-page page">
         <Meta title="Forgot Password | S-Shop" />
         <ForgotPasswordForm />
      </div>
   );
};

export default forgotpassword;
