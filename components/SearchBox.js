import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
   const router = useRouter();
   const [keyword, setKeyword] = useState('');

   const handleSearch = (e) => {
      e.preventDefault();

      if (keyword.trim()) {
         router.push(`/search/${keyword}`);
      } else {
         router.push('/search');
      }
   };

   return (
      <div className="search-box section">
         <form onSubmit={handleSearch}>
            <div>
               <span className="search-icon">
                  <FaSearch />
               </span>
               <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search for products, brands, category..."
               />
               <button
                  disabled={keyword.length === 0}
                  className={
                     keyword.length === 0 ? 'btn btn-grey' : 'btn btn-secondary'
                  }
               >
                  Search
               </button>
            </div>
         </form>
      </div>
   );
};

export default SearchBox;
