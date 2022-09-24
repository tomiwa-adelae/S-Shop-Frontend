import React from 'react';
import SearchForm from '../components/SearchPageComponents/SearchForm';
import SearchProducts from '../components/SearchPageComponents/SearchProducts';
import BackBtn from '../components/BackBtn';
import Meta from '../components/Meta';

const search = () => {
   return (
      <div className="search-page page">
         <Meta title="Search | S-Shop" />
         <BackBtn to="/" />
         <SearchForm />
         <SearchProducts />
      </div>
   );
};

export default search;
