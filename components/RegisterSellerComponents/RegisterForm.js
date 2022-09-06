import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ErrorMessageBox } from '../MessageBox';
import { useDropzone } from 'react-dropzone';
import { registerSeller } from '../../store/actions/userSellerActions';
import { SmallWhiteSpinner } from '../Spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CLEAR_ERRORS } from '../../store/constants/errorConstants';
import { logout } from '../../store/actions/userActions';

const RegisterForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [brandName, setBrandName] = useState('');
   const [brandLogo, setBrandLogo] = useState('');
   const [accountNumber, setAccountNumber] = useState('');
   const [bankName, setBankName] = useState('');
   const [nameOfAccountHolder, setNameOfAccountHolder] = useState('');
   const [password, setPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);

   const registerSellerState = useSelector((state) => state.registerSeller);
   const { loading, seller } = registerSellerState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(logout());

      if (seller) {
         router.push('/sellerdashboard');
      }
   }, [dispatch, seller]);

   useEffect(() => {
      dispatch({ type: CLEAR_ERRORS });
   }, [dispatch]);

   const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
         const reader = new FileReader();

         reader.readAsDataURL(file);
         reader.onload = () => {
            const binaryStr = reader.result;

            setBrandLogo(binaryStr);
         };
      });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      const sellerDetails = {
         firstName,
         lastName,
         email,
         phoneNumber,
         brandName,
         brandLogo,
         accountNumber,
         bankName,
         nameOfAccountHolder,
         password,
         retypePassword,
      };

      dispatch(registerSeller(sellerDetails));
   };

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div className="register-seller-form section">
         <div className="container">
            <div className="head py-1">
               <h4>Get started selling on S-Shop</h4>
            </div>
            <div className="intro">
               <p className="lead">
                  Create a S-Shop seller's account.{' '}
                  <Link href="/loginseller">
                     Login to your seller's account
                  </Link>
               </p>
            </div>
            <form onSubmit={handleSubmit}>
               <section className="box section">
                  <h6>Personal information</h6>
                  <div>
                     <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder="First name *"
                     />
                  </div>
                  <div>
                     <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Last name *"
                     />
                  </div>
                  <div>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email address *"
                     />
                  </div>
                  <div>
                     <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="Phone number *"
                     />
                  </div>
               </section>
               <section className="box section-small">
                  <h6>Brand information</h6>
                  <div>
                     <input
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        type="text"
                        placeholder="Brand name (Optional)"
                     />
                  </div>
                  <div>
                     <label>Brand logo (Optional)</label>
                  </div>
                  <div
                     {...getRootProps()}
                     className={isDragActive ? 'modal-active' : 'upload-modal'}
                  >
                     <div>
                        <input {...getInputProps()} />
                     </div>

                     <small>Drap and drop or click to browse a file</small>
                  </div>

                  <div className="preview-file">
                     {brandLogo && (
                        <>
                           <div>
                              <img src={brandLogo} alt="" />
                           </div>
                           <span
                              onClick={() => setBrandLogo(null)}
                              className="btn btn-danger my-0"
                           >
                              Delete
                           </span>
                        </>
                     )}
                  </div>
               </section>
               <section className="box section-small">
                  <h6>Payment information</h6>
                  <div>
                     <input
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        type="number"
                        placeholder="Account number *"
                     />
                  </div>
                  <div>
                     <select
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        name="bankName"
                        id="bankName"
                     >
                        <option value="">Select bank</option>
                        <option value="Access bank">Access Bank</option>
                        <option value="United bank of africa">
                           United bank of africa
                        </option>
                        <option value="First bank">first bank</option>
                        <option value="Zenith bank">Zenith bank</option>
                        <option value="Polaris bank">Polaris bank</option>
                     </select>
                  </div>
                  <div>
                     <input
                        value={nameOfAccountHolder}
                        onChange={(e) => setNameOfAccountHolder(e.target.value)}
                        type="text"
                        placeholder="Name of account holder *"
                     />
                  </div>
               </section>
               <section className="box section-small">
                  <h6>Login details</h6>
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
                  <div className="password">
                     <input
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        type={showPassword2 ? 'text' : 'password'}
                        placeholder="Confirm password *"
                     />
                     <span onClick={() => setShowPassword2(!showPassword2)}>
                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
               </section>
               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {loading ? <SmallWhiteSpinner /> : 'Create account'}
                  </button>
               </div>
               <p className="my-1">
                  Already have a seller's account?{' '}
                  <Link href="/loginseller">
                     <span className="text-secondary">Login now</span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterForm;
