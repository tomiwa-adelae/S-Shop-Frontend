import React from 'react';
import Link from 'next/link';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { RiMastercardFill, RiVisaFill } from 'react-icons/ri';
import { BsCashStack } from 'react-icons/bs';

const Footer = () => {
   return (
      <footer>
         <div className="footer-details section">
            <div className="container">
               <div className="wrapper">
                  <div className="box">
                     <div className="head">
                        <h5>Let us help you</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">Help center</Link>
                        <Link href="/">Help center</Link>
                        <Link href="/">Help center</Link>
                        <Link href="/">Help center</Link>
                        <Link href="/">Help center</Link>
                     </div>
                  </div>
                  <div className="box">
                     <div className="head">
                        <h5>Make money on S-Shop</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">Sell on S-Shop</Link>
                     </div>
                  </div>
                  <div className="box footer-social">
                     <div className="head">
                        <h5>Join us on </h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">
                           <BsFacebook className="icon" />
                        </Link>
                        <Link href="/">
                           <BsTwitter className="icon" />
                        </Link>
                        <Link href="/">
                           <BsInstagram className="icon" />
                        </Link>
                     </div>
                  </div>
                  <div className="box footer-payments">
                     <div className="head">
                        <h5>Payment Methods</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">
                           <RiMastercardFill className="icon" />
                        </Link>
                        <Link href="/">
                           <RiVisaFill className="icon" />
                        </Link>
                        <Link href="/">
                           <BsCashStack className="icon" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-copyright section">
            <div className="container">
               <p>Copyright &copy; 2022. S-Shop. All rights reserved</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
