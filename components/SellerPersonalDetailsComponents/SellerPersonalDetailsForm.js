import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSellerProfile } from '../../store/actions/userSellerActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';
import { useDropzone } from 'react-dropzone';
import { UPDATE_SELLER_USER_RESET } from '../../store/constants/userSellerConstants';

const SellerPersonalDetailsForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const updateSellerUserProfileState = useSelector(
      (state) => state.updateSellerUserProfile
   );
   const { success, loading } = updateSellerUserProfileState;

   const [firstName, setFirstName] = useState(seller ? seller.firstName : '');
   const [lastName, setLastName] = useState(seller ? seller.lastName : '');
   const [email] = useState(seller ? seller.email : '');
   const [phoneNumber, setPhoneNumber] = useState(
      seller ? seller.phoneNumber : ''
   );
   const [brandName, setBrandName] = useState(seller ? seller.brandName : '');
   const [brandLogo, setBrandLogo] = useState('');
   const [accountNumber, setAccountNumber] = useState(
      seller ? seller.accountNumber : ''
   );
   const [bankName, setBankName] = useState(seller ? seller.bankName : '');
   const [nameOfAccountHolder, setNameOfAccountHolder] = useState(
      seller ? seller.nameOfAccountHolder : ''
   );

   useEffect(() => {
      setBrandLogo(seller?.brandLogo);

      if (!seller) {
         router.push('/login?redirect=adminpersonaldetails');
      }
   }, [seller, router]);

   useEffect(() => {
      dispatch({ type: UPDATE_SELLER_USER_RESET });
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

      if (brandLogo !== seller.brandLogo) {
         const details = {
            firstName,
            lastName,
            email,
            phoneNumber,
            brandName,
            brandLogo,
            accountNumber,
            bankName,
            nameOfAccountHolder,
         };

         dispatch(updateSellerProfile(details));
      } else {
         const details = {
            firstName,
            lastName,
            email,
            phoneNumber,
            brandName,
            accountNumber,
            bankName,
            nameOfAccountHolder,
         };

         dispatch(updateSellerProfile(details));
      }
   };

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div className="seller-personal-details-form section">
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
                        <Link href={`/sellerpersonaldetails`}>
                           <span>Personal Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <section className="section-small">
                     <h6>Personal information</h6>
                     <div>
                        <input
                           type="text"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First name *"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last name *"
                        />
                     </div>
                     <div>
                        <input
                           type="email"
                           disabled
                           value={email}
                           placeholder="Email *"
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
                  <section className="section-small">
                     <h6>Brand information</h6>
                     <div>
                        <input
                           type="text"
                           value={brandName}
                           onChange={(e) => setBrandName(e.target.value)}
                           placeholder="Brand name"
                        />
                     </div>
                     <div>
                        <label>Brand logo (Optional)</label>
                     </div>
                     <div
                        {...getRootProps()}
                        className={
                           isDragActive ? 'modal-active' : 'upload-modal'
                        }
                     >
                        <div>
                           <input id="logo" {...getInputProps()} />
                        </div>

                        <small>Drap and drop or click to browse a file</small>
                     </div>

                     <div className="preview-file">
                        {brandLogo && (
                           <>
                              <div>
                                 <img src={brandLogo} alt="" />
                              </div>
                              <span className="btn btn-secondary m-0">
                                 <label htmlFor="logo">Change logo</label>
                              </span>
                              <span
                                 onClick={() =>
                                    setBrandLogo(
                                       'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                                    )
                                 }
                                 className="btn btn-danger m-0"
                              >
                                 Delete
                              </span>
                           </>
                        )}
                     </div>
                  </section>
                  <section className="section-small">
                     <h6>Payment information</h6>
                     <div>
                        <input
                           type="number"
                           value={accountNumber}
                           onChange={(e) => setAccountNumber(e.target.value)}
                           placeholder="Account number *"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           value={bankName}
                           onChange={(e) => setBankName(e.target.value)}
                           placeholder="Bank name *"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           value={nameOfAccountHolder}
                           onChange={(e) =>
                              setNameOfAccountHolder(e.target.value)
                           }
                           placeholder="Name of account holder *"
                        />
                     </div>
                  </section>
                  {success && (
                     <SuccessMessageBox msg="Profile updated! Please go back!" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update profile'}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SellerPersonalDetailsForm;
