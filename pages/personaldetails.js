import PersonalDetailsForm from '../components/PersonalDetailsComponents/PersonalDetailsForm';
import BackBtn from '../components/BackBtn';

const personaldetails = () => {
   return (
      <div className="personal-details-page page">
         <BackBtn to="/profile" />
         <PersonalDetailsForm />
      </div>
   );
};

export default personaldetails;
