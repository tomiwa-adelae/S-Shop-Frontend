import Link from 'next/link';
import React from 'react';

const BackBtn = ({ to }) => {
   return (
      <div className="container back-btn">
         <Link href={to}>
            <button className="btn btn-grey">Back</button>
         </Link>
      </div>
   );
};

export default BackBtn;
