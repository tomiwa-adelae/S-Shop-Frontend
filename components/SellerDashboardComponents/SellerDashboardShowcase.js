import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { returnErrors } from '../../store/actions/errorActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SellerDashboardShowcase = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const sellerState = useSelector((state) => state.loginSeller);
   const { seller } = sellerState;

   const [brandLogo, setBrandLogo] = useState('');

   const [showBank, setShowBank] = useState(false);

   useEffect(() => {
      setBrandLogo(
         seller?.brandLogo ||
            'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
      );

      if (!seller) {
         router.push('/loginseller?redirect=sellerdashboard');

         dispatch(returnErrors('No token, Authorization denied!'));
      }
   }, [router, seller, dispatch]);

   return (
      <div className="seller-dashboard-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/sellerdashboard`}>
                           <span>Seller</span>
                        </Link>
                     </h6>
                  </div>
                  <h3 suppressHydrationWarning={true}>
                     {seller ? `${seller.firstName} ${seller.lastName}` : null}
                  </h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {seller?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{seller?.phoneNumber}</h5>
                  <button
                     onClick={() => setShowBank(!showBank)}
                     className="btn btn-secondary my-1"
                  >
                     {showBank ? 'Hide bank details' : 'Show bank details'}
                  </button>
                  {showBank && (
                     <>
                        <h5
                           className="my-0"
                           suppressHydrationWarning={true}
                        >{`Bank name: ${seller?.bankName}`}</h5>
                        <h5
                           className="my-0"
                           suppressHydrationWarning={true}
                        >{`Account number: ${seller?.accountNumber}`}</h5>
                        <h5 suppressHydrationWarning={true}>
                           {' '}
                           {`Name of account holder: ${seller?.nameOfAccountHolder}`}
                        </h5>
                     </>
                  )}
               </div>
               <div className="img">
                  <img
                     suppressHydrationWarning={true}
                     src={brandLogo}
                     alt={seller?.brandName}
                  />
                  <h5 suppressHydrationWarning={true} className="my-0">
                     {seller?.brandName}
                  </h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SellerDashboardShowcase;
