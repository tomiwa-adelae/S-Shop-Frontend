import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

const ProfileShowcase = () => {
   const router = useRouter();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/login');
      }
   }, [user]);

   return (
      <div className="profile-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/profile`}>
                           <span>Profile</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <h3 suppressHydrationWarning={true}>
                     {user ? `${user.firstName} ${user.lastName}` : null}
                  </h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {user?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{user?.phoneNumber}</h5>
               </div>
               <div className="img">
                  <img
                     src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileShowcase;
