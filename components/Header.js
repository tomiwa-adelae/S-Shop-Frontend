import Link from 'next/link';
import React from 'react';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Header = () => {
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
               <Link href="/login">
                  <span>
                     <FaUserAlt className="user-icon" />
                     Hi, Sign In
                  </span>
               </Link>
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
