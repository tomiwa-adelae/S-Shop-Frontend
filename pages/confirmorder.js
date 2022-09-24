import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';
import ConfirmOrderCheckOut from '../components/ConfirmOrderComponents/ConfirmOrderCheckOut';
import ConfirmOrderDetails from '../components/ConfirmOrderComponents/ConfirmOrderDetails';
import ConfirmOrderHead from '../components/ConfirmOrderComponents/ConfirmOrderHead';
import { HelpOrdering } from '../components/Help';

const confirmorder = () => {
   return (
      <div className="confirm-order-page page">
         <Meta title="Confirm Order | S-Shop" />
         <BackBtn to="/payment" />
         <HelpOrdering />
         <ConfirmOrderHead />
         <div className="container">
            <div className="wrapper">
               <ConfirmOrderDetails />
               <ConfirmOrderCheckOut />
            </div>
         </div>
      </div>
   );
};

export default confirmorder;
