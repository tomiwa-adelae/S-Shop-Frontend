import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ErrorMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';
import { registerUser } from '../../store/actions/userActions';

const RegisterForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);

   const userState = useSelector((state) => state.register);
   const { loading, user } = userState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      const redirect = router.query.redirect ? router.query.redirect : '/';

      if (user) {
         router.push(redirect);
      }
   }, [user, router]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         registerUser({
            firstName,
            lastName,
            phoneNumber,
            confirmPassword,
            email,
            password,
         })
      );
   };
   return (
      <div className="register-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP</h4>
            </div>
            <div className="intro">
               <p className="lead">Create your S-SHOP account</p>
            </div>
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     type="text"
                     placeholder="First name"
                  />
               </div>
               <div>
                  <input
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     type="text"
                     placeholder="Last name"
                  />
               </div>
               <div>
                  <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="email"
                     placeholder="Email address"
                  />
               </div>
               <div>
                  <input
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     type="number"
                     placeholder="Phone number"
                  />
               </div>
               <div className="password">
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type={showPassword1 ? 'text' : 'password'}
                     placeholder="Password"
                  />
                  <span onClick={() => setShowPassword1(!showPassword1)}>
                     {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
               <div className="password">
                  <input
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     type={showPassword2 ? 'text' : 'password'}
                     placeholder="Confirm password"
                  />
                  <span onClick={() => setShowPassword2(!showPassword2)}>
                     {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {' '}
                     {loading ? <SmallWhiteSpinner /> : 'Create account'}
                  </button>
               </div>
               <p className="my-1">
                  Already have an account?{' '}
                  <Link href="/login">
                     <span className="text-secondary">Login now</span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterForm;
