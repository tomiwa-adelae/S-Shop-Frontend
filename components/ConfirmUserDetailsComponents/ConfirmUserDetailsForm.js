import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserShippingDetails } from '../../store/actions/shippingActions';
import { ErrorMessageBox } from '../MessageBox';

const ConfirmUserDetailsForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const [firstName, setFirstName] = useState(user ? user.firstName : '');
   const [lastName, setLastName] = useState(user ? user.lastName : '');
   const [email, setEmail] = useState(user ? user.email : '');
   const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');
   const [errorMsg, setErrorMsg] = useState(null);

   const handleSumit = (e) => {
      e.preventDefault();

      if (!firstName || !lastName || !email || !phoneNumber)
         return setErrorMsg('Please enter all fields!');

      if (phoneNumber.length !== 11 || phoneNumber.charAt(0) !== '0')
         return setErrorMsg('Please enter a valid phoneNumber!');

      dispatch(
         saveUserShippingDetails({ firstName, lastName, email, phoneNumber })
      );

      router.push('/payment');
   };

   return (
      <div className="confirm-user-details-form">
         {errorMsg && <ErrorMessageBox msg={errorMsg} />}
         <form onSubmit={handleSumit}>
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
            <div>
               <button className="btn btn-primary">Proceed</button>
            </div>
         </form>
      </div>
   );
};

export default ConfirmUserDetailsForm;
