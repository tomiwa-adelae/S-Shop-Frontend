import Link from 'next/link';
import React from 'react';

const RegisterForm = () => {
   return (
      <div className="register-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP</h4>
            </div>
            <div className="intro">
               <p className="lead">Create your S-SHOP account</p>
            </div>
            <form>
               <div>
                  <input type="text" placeholder="First name" />
               </div>
               <div>
                  <input type="text" placeholder="Last name" />
               </div>
               <div>
                  <input type="email" placeholder="Email address" />
               </div>
               <div>
                  <input type="text" placeholder="Phone number" />
               </div>
               <div>
                  <input type="text" placeholder="Password" />
               </div>
               <div>
                  <input type="text" placeholder="Confirm password" />
               </div>
               <div>
                  <button className="btn btn-primary">Create account</button>
               </div>
               <p className="my-1">
                  Already have an account?{' '}
                  <Link href="/login">
                     <span className="text-secondary">Login now</span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterForm;
