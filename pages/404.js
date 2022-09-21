import Link from 'next/link';

export default function FourOhFour() {
   return (
      <div className="page">
         <div className="container">
            <h1>404 - Page Not Found</h1>
            <Link href="/">
               <button className="btn btn-secondary">Go back home</button>
            </Link>
         </div>
      </div>
   );
}
