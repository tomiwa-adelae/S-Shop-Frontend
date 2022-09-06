import React from 'react';
import AdminUsersIntro from '../components/AdminUsersComponents/AdminUsersIntro';
import AdminUsersList from '../components/AdminUsersComponents/AdminUsersList';

const adminusers = () => {
   return (
      <div className="admin-users-page">
         <AdminUsersIntro />
         <AdminUsersList />
      </div>
   );
};

export default adminusers;
