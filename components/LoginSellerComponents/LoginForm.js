import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ErrorMessageBox } from '../MessageBox';
import { loginSeller } from '../../store/actions/userSellerActions';
import { SmallWhiteSpinner } from '../Spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CLEAR_ERRORS } from '../../store/constants/errorConstants';
import { logout } from '../../store/actions/userActions';

const LoginForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');

   const [password, setPassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);

   const loginSellerState = useSelector((state) => state.loginSeller);
   const { loading, seller } = loginSellerState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(logout());

      if (seller) {
         router.push('/admindashboard');
      }
   }, [dispatch, seller]);

   useEffect(() => {
      dispatch({ type: CLEAR_ERRORS });
   }, [dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const sellerDetails = {
         email,
         password,
      };

      dispatch(loginSeller(sellerDetails));
   };

   return (
      <div className="login-seller-form section">
         <div className="container">
            <div className="head py-1">
               <h4>Login to your S-Shop seller's account</h4>
            </div>
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="email"
                     placeholder="Email address *"
                  />
               </div>
               <div className="password">
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type={showPassword1 ? 'text' : 'password'}
                     placeholder="Password *"
                  />
                  <span onClick={() => setShowPassword1(!showPassword1)}>
                     {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>

               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {loading ? (
                        <SmallWhiteSpinner />
                     ) : (
                        'Login to your seller account'
                     )}
                  </button>
               </div>
               <p className="my-1">
                  Don't have a seller's account?{' '}
                  <Link href="/registerseller">
                     <span className="text-secondary">
                        Create a seller's account now
                     </span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
