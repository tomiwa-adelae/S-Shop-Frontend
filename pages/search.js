import React from 'react';
import SearchForm from '../components/SearchPageComponents/SearchForm';
import SearchProducts from '../components/SearchPageComponents/SearchProducts';

const search = () => {
   return (
      <div className="search-page">
         <SearchForm />
         <SearchProducts />
      </div>
   );
};

export default search;
