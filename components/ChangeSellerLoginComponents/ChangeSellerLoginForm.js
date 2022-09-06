import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSellerLogin } from '../../store/actions/userSellerActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BackBtn from '../BackBtn';

const ChangeSellerLoginForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);
   const [showPassword3, setShowPassword3] = useState(false);

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const changLSellerLoginState = useSelector(
      (state) => state.changeSellerLogin
   );
   const { success, loading } = changLSellerLoginState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!seller) {
         router.push('/loginseller?redirect=changesellerlogin');
      }

      if (success) {
         setCurrentPassword('');
         setNewPassword('');
         setRetypePassword('');
         setShowPassword1(false);
         setShowPassword2(false);
         setShowPassword3(false);
      }
   }, [seller, success]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         updateSellerLogin({ currentPassword, newPassword, retypePassword })
      );
   };

   return (
      <>
         <BackBtn to="sellerdashboard" />
         <div className="change-seller-login-form section-small">
            <div className="container">
               <div className="wrapper">
                  <form onSubmit={handleSubmit}>
                     <div className="links-tags">
                        <h6 className="py-1">
                           <Link href="/">
                              <span>S-Shop</span>
                           </Link>{' '}
                           &gt;{' '}
                           <Link href={`/sellerdashboard`}>
                              <span>Profile</span>
                           </Link>{' '}
                           &gt;{' '}
                           <Link href={`/changesellerlogin`}>
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
                        {success && (
                           <Link href="/sellerdashboard">
                              <button className="btn btn-secondary mx-1">
                                 Go back to dashboard
                              </button>
                           </Link>
                        )}
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default ChangeSellerLoginForm;
