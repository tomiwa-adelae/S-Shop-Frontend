import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

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
            <form className="search-form">
               <div>
                  <FaSearch className="search" />
                  <input
                     type="text"
                     placeholder="Search products, brands, categories..."
                  />
                  <div className="search-btn">
                     <button className="btn btn-secondary">Search</button>
                  </div>
               </div>
               <br />
            </form>
            <nav className="nav">
               <span>
                  {userDetails ? (
                     <Link href="/profile">
                        <span>
                           <FaUserAlt className="user-icon" />
                           Hi, {user.firstName}
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
               {/* {user ? (
                  <Link href="/profile">
                     <span>
                        <FaUserAlt className="user-icon" />
                        Hi, {user?.firstName}
                     </span>
                  </Link>
               ) : (
                  // </Link>
                  <Link href="/login">
                     <span>
                        <FaUserAlt className="user-icon" />
                        Hi,Sign In
                     </span>
                  </Link>
               )} */}
               <Link href="/cart">
                  <span>
                     <FaShoppingCart className="cart-icon" />
                     Cart
                  </span>
               </Link>
            </nav>
         </div>
      </header>
   );
};

export default Header;
