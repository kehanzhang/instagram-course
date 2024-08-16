import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="sticky top-0 p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
