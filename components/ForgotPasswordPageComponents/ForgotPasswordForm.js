import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const ForgotPasswordForm = () => {
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');

   const forgotPasswordState = useSelector((state) => state.forgotPassword);
   const { loading, success } = forgotPasswordState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(forgotPassword({ email }));
   };

   return (
      <div className="forgot-password-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP</h4>
            </div>
            <div className="intro">
               <p className="lead">Forgot your S-SHOP account password</p>
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
               {msg && <ErrorMessageBox msg={msg} />}
               {success && <SuccessMessageBox msg={success} />}
               <div>
                  <button className="btn btn-primary">
                     {loading ? <SmallWhiteSpinner /> : 'Submit'}{' '}
                  </button>
               </div>
               <p className="my-1">
                  Already remember your password?{' '}
                  <Link href="/login">
                     <span className="text-secondary">Login now</span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default ForgotPasswordForm;
