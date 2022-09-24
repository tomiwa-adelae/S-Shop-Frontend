import PersonalDetailsForm from '../components/PersonalDetailsComponents/PersonalDetailsForm';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const personaldetails = () => {
   return (
      <div className="personal-details-page page">
         <Meta title="Personal Details | S-Shop" />
         <BackBtn to="/profile" />
         <PersonalDetailsForm />
      </div>
   );
};

export default personaldetails;
