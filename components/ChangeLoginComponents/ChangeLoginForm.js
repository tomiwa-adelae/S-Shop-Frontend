import Link from 'next/link';
import React from 'react';

const ChangeLoginForm = () => {
   return (
      <div className="change-login-form section">
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
                        <Link href={`/changelogin`}>
                           <span>Login Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <div>
                     <input type="text" placeholder="Current password" />
                  </div>
                  <div>
                     <input type="text" placeholder="New password" />
                  </div>
                  <div>
                     <input type="text" placeholder="Re-type new password" />
                  </div>
                  <div>
                     <button className="btn btn-primary">Update Login</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ChangeLoginForm;
