import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLogin } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangeLoginForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);
   const [showPassword3, setShowPassword3] = useState(false);

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const changeLoginState = useSelector((state) => state.changeLogin);
   const { success, loading } = changeLoginState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push('/login?redirect=changelogin');
      }

      if (success) {
         setCurrentPassword('');
         setNewPassword('');
         setRetypePassword('');
         setShowPassword1(false);
         setShowPassword2(false);
         setShowPassword3(false);
      }
   }, [user, success]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(updateLogin({ currentPassword, newPassword, retypePassword }));
   };

   return (
      <div className="change-login-form section">
         <div className="container">
            <div className="wrapper">
               <form onSubmit={handleSubmit}>
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/profile`}>
                           <span>Profile</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/changelogin`}>
                           <span>Login Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <div className="password">
                     <input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        type={showPassword1 ? 'text' : 'password'}
                        placeholder="Current password"
                     />
                     <span onClick={() => setShowPassword1(!showPassword1)}>
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  <div className="password">
                     <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type={showPassword2 ? 'text' : 'password'}
                        placeholder="New password"
                     />
                     <span onClick={() => setShowPassword2(!showPassword2)}>
                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  <div className="password">
                     <input
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        type={showPassword3 ? 'text' : 'password'}
                        placeholder="Re-type new password"
                     />
                     <span onClick={() => setShowPassword3(!showPassword3)}>
                        {showPassword3 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  {success && (
                     <SuccessMessageBox msg="Login details updated!" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update Login'}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ChangeLoginForm;
