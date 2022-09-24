import Meta from '../components/Meta';
import RegisterForm from '../components/RegisterPageComponents/RegisterForm';

const register = () => {
   return (
      <div className="register-page page">
         <Meta title="Regitser | S-Shop" />
         <RegisterForm />
      </div>
   );
};

export default register;
