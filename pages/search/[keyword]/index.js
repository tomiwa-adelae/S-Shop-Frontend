import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const index = () => {
   const router = useRouter();

   useEffect(() => {
      console.log(router.query);
   }, []);

   return <div>index</div>;
};

export default index;
