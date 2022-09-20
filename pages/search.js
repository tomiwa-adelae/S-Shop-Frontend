import React from 'react';
import SearchForm from '../components/SearchPageComponents/SearchForm';
import SearchProducts from '../components/SearchPageComponents/SearchProducts';
import BackBtn from '../components/BackBtn';

const search = () => {
   return (
      <div className="search-page page">
         <BackBtn to="/" />
         <SearchForm />
         <SearchProducts />
      </div>
   );
};

export default search;
