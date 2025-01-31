import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BackBtn from '../BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USER_RESET } from '../../store/constants/userConstants';

const ProfileShowcase = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      dispatch({ type: UPDATE_USER_RESET });
      if (!user) {
         router.push('/login');
      }
   }, [user, dispatch, router]);

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
