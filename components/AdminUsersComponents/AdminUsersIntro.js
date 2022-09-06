import Link from 'next/link';
import BackBtn from '../BackBtn';

const AdminUsersIntro = () => {
   return (
      <div className="admin-users-intro section-small">
         <div className="container">
            <div className="wrapper">
               <BackBtn to="sellerdashboard" />
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/sellerdashboard`}>
                        <span>Dashboard</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/adminusers`}>
                        <span>All users</span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminUsersIntro;
