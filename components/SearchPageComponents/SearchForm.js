import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';

const SearchForm = () => {
   const dispatch = useDispatch();

   const [keyword, setKeyword] = useState('');

   const handleSearch = (e) => {
      setKeyword(e.target.value);

      dispatch(getProducts(keyword));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(getProducts(keyword));
   };

   return (
      <div className="search-form">
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div>
                  <span className="search-icon">
                     <FaSearch />
                  </span>
                  <input
                     type="text"
                     value={keyword}
                     onChange={handleSearch}
                     placeholder="Search for products, brands, category..."
                  />
                  <button
                     disabled={keyword.length === 0}
                     className={
                        keyword.length === 0
                           ? 'btn btn-grey'
                           : 'btn btn-secondary'
                     }
                  >
                     Search
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SearchForm;
