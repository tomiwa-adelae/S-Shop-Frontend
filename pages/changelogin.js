import ChangeLoginForm from '../components/ChangeLoginComponents/ChangeLoginForm';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const changelogin = () => {
   return (
      <div className="change-login-page page">
         <Meta title="Change Login | S-Shop" />
         <BackBtn to="/profile" />
         <ChangeLoginForm />
      </div>
   );
};

export default changelogin;
