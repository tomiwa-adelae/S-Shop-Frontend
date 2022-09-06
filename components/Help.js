import React from 'react';

const SomethingWrong = () => {
   return (
      <div className="container">
         <div className="something-wrong section">
            <p className="p-1">Is something wrong? Please call 0802-783-6001</p>
         </div>
      </div>
   );
};

const HelpOrdering = () => {
   return (
      <div className="container">
         <div className="something-wrong section-small">
            <p className="p-1">
               Need help placing an order? Call 0802-783-6001
            </p>
         </div>
      </div>
   );
};

export { SomethingWrong, HelpOrdering };
