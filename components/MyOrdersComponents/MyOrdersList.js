import Link from 'next/link';
import React from 'react';

const MyOrdersList = () => {
   return (
      <div className="my-ordes-list section">
         <div className="container">
            <div className="wrapper">
               <div className="boxes">
                  <div className="box my-0">
                     <div className="img">
                        <img
                           src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852"
                           alt=""
                        />
                     </div>
                     <div className="details">
                        <div className="col-one p-0">
                           <div className="name">
                              <Link href="/">
                                 <h5>Nezuko Hoodie</h5>
                              </Link>
                              <h6 className="my-0">Brand: Pick me</h6>
                              <Link href="/">
                                 <button className="btn btn-grey">
                                    Details
                                 </button>
                              </Link>
                           </div>
                        </div>
                        <div className="col-two p-0">
                           <span className="badge badge-secondary my-0">
                              Paid
                           </span>
                           <span className="badge badge-danger my-0">
                              Not delivered
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="box my-0">
                     <div className="img">
                        <img
                           src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852"
                           alt=""
                        />
                     </div>
                     <div className="details">
                        <div className="col-one p-0">
                           <div className="name">
                              <Link href="/">
                                 <h5>Nezuko Hoodie</h5>
                              </Link>
                              <h6 className="my-0">Brand: Pick me</h6>
                              <Link href="/">
                                 <button className="btn btn-grey">
                                    Details
                                 </button>
                              </Link>
                           </div>
                        </div>
                        <div className="col-two p-0">
                           <span className="badge badge-secondary my-0">
                              Paid
                           </span>
                           <span className="badge badge-danger my-0">
                              Not delivered
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="box my-0">
                     <div className="img">
                        <img
                           src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852"
                           alt=""
                        />
                     </div>
                     <div className="details">
                        <div className="col-one p-0">
                           <div className="name">
                              <Link href="/">
                                 <h5>Nezuko Hoodie</h5>
                              </Link>
                              <h6 className="my-0">Brand: Pick me</h6>
                              <Link href="/">
                                 <button className="btn btn-grey">
                                    Details
                                 </button>
                              </Link>
                           </div>
                        </div>
                        <div className="col-two p-0">
                           <span className="badge badge-secondary my-0">
                              Paid
                           </span>
                           <span className="badge badge-danger my-0">
                              Not delivered
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrdersList;
