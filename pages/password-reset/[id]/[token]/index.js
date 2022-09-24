import Meta from '../../../../components/Meta';
import ResetPasswordForm from '../../../../components/ResetPasswordPageComponents/ResetPasswordForm';

const resetpassword = () => {
   return (
      <div className="reset-password-page page">
         <Meta title="Reset Password | S-Shop" />

         <ResetPasswordForm />
      </div>
   );
};

export default resetpassword;
