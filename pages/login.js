import LoginForm from '../components/LoginPageComponents/LoginForm';
import Meta from '../components/Meta';

const login = () => {
   return (
      <div className="login-page page">
         <Meta title="Login | S-Shop" />
         <LoginForm />
      </div>
   );
};

export default login;
