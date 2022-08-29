import Link from 'next/link';
import React from 'react';

const PersonalDetailsForm = () => {
   return (
      <div className="personal-details-form section">
         <div className="container">
            <div className="wrapper">
               <form>
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
                     <input type="text" placeholder="First name" />
                  </div>
                  <div>
                     <input type="text" placeholder="Last name" />
                  </div>
                  <div>
                     <input type="text" placeholder="Phone number" />
                  </div>
                  <div>
                     <button className="btn btn-primary">Update profile</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PersonalDetailsForm;
