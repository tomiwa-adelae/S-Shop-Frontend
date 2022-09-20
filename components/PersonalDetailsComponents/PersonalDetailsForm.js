import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/actions/userActions';
import { CLEAR_ERRORS } from '../../store/constants/errorConstants';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const PersonalDetailsForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const updateUserProfileState = useSelector(
      (state) => state.updateUserProfile
   );
   const { success, loading } = updateUserProfileState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const [firstName, setFirstName] = useState(user ? user.firstName : '');
   const [lastName, setLastName] = useState(user ? user.lastName : '');
   const [email] = useState(user ? user.email : '');
   const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');

   useEffect(() => {
      dispatch({ type: CLEAR_ERRORS });
      if (!user) {
         router.push('/login?redirect=personaldetails');
      }
   }, [user, dispatch, router]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(updateProfile({ firstName, lastName, phoneNumber }));
   };

   return (
      <div className="personal-details-form section">
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
                        <Link href={`/personaldetails`}>
                           <span>Personal Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <div className="img-container">
                     <div className="img">
                        <img
                           src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                           alt=""
                        />
                     </div>
                  </div>
                  <div>
                     <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        type="email"
                        defaultValue={email}
                        placeholder="Email"
                        disabled
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
                  {success && <SuccessMessageBox msg="Profile updated!" />}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update profile'}
                     </button>
                     {success && (
                        <Link href="/profile">
                           <button className="btn btn-secondary mx-1">
                              Go back to profile
                           </button>
                        </Link>
                     )}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PersonalDetailsForm;
