import BackBtn from '../../../components/BackBtn';
import CategoryWrapper from '../../../components/CategoryPageComponents/CategoryWrapper';

const category = () => {
   return (
      <div className="category-page page">
         <BackBtn to="/" />
         <CategoryWrapper />
      </div>
   );
};

export default category;
