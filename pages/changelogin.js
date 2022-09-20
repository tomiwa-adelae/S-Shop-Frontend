import ChangeLoginForm from '../components/ChangeLoginComponents/ChangeLoginForm';
import BackBtn from '../components/BackBtn';

const changelogin = () => {
   return (
      <div className="change-login-page">
         <BackBtn to="/profile" />
         <ChangeLoginForm />
      </div>
   );
};

export default changelogin;
