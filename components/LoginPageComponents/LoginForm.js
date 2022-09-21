import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/userActions';
import { ErrorMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const LoginForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const userState = useSelector((state) => state.login);
   const { loading, user } = userState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      const redirect = router.query.redirect ? router.query.redirect : '/';

      if (user) {
         router.push(redirect);
      }
   }, [user, router, dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(loginUser({ email, password }));
   };

   return (
      <div className="login-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP</h4>
            </div>
            <div className="intro">
               <p className="lead">Login to your S-SHOP account</p>
            </div>
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="email"
                     placeholder="Email address"
                  />
               </div>
               <div className="password">
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type={showPassword ? 'text' : 'password'}
                     placeholder="Password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
               <Link className="my-1 text-secondary" href="/forgotpassword">
                  Forgotten password?
               </Link>
               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {loading ? <SmallWhiteSpinner /> : 'Login'}{' '}
                  </button>
               </div>
               <p className="my-1">
                  Do not have an account?{' '}
                  <Link href="/register">
                     <strong className="text-secondary">
                        Create an account now
                     </strong>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
