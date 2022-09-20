import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import TopBanner from './TopBanner';

const Header = () => {
   const [userDetails, setUserDetails] = useState(null);

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      setUserDetails(user);
   }, [user]);

   return (
      <header>
         <div className="wrapper">
            <div className="logo">
               <Link href="/">
                  <h3>
                     S-<span className="text-secondary">S</span>H
                     <span className="text-grey">O</span>P
                  </h3>
               </Link>
            </div>
            <nav className="nav">
               <span className="mx-1">
                  <Link href="/search">
                     <span>
                        <FaSearch className="search-icon search" />
                        Search
                     </span>
                  </Link>
               </span>
               <span className="mx-1">
                  {userDetails ? (
                     <Link href="/profile">
                        <span>
                           <FaUserAlt className="user-icon" />
                           Hi, {user?.firstName}
                        </span>
                     </Link>
                  ) : (
                     <Link href="/login">
                        <span>
                           <FaUserAlt className="user-icon" />
                           {`Hi, Sign in`}
                        </span>
                     </Link>
                  )}
               </span>
               <Link href="/cart">
                  <span className="mx-1">
                     <FaShoppingCart className="cart-icon" />
                     Cart
                  </span>
               </Link>
            </nav>
         </div>
         <TopBanner />
      </header>
   );
};

export default Header;
