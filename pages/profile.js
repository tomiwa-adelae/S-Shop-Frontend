import { SomethingWrong } from '../components/Help';
import ProfileInfo from '../components/ProfilePageComponents/ProfileInfo';
import ProfileShowcase from '../components/ProfilePageComponents/ProfileShowcase';

const profile = () => {
   return (
      <div className="profile-page">
         <ProfileShowcase />
         <ProfileInfo />
         <SomethingWrong />
      </div>
   );
};

export default profile;
