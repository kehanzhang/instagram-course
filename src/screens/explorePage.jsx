import React, { useState } from 'react';
import useSWR from 'swr';
import SearchBar from '../components/searchBar';
import QueriedResults from '../components/queriesResults';
import GridPostPreviews from '../components/gridPostPreviews';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: exploreData, error: exploreError, isLoading: exploreLoading } = useSWR('https://instagram.athensapi.com/api/explore', fetcher);
  const { data: searchData, error: searchError, isLoading: searchLoading } = useSWR(
    searchQuery ? `https://instagram.athensapi.com/api/search?q=${searchQuery}` : null,
    fetcher
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      {exploreError || searchError ? (
        <div>Failed to load</div>
      ) : exploreLoading || searchLoading ? (
        null
      ) : searchQuery && searchData ? (
        <QueriedResults searchResults={searchData} />
      ) : (
        <GridPostPreviews postData={exploreData} />
      )}
    </div>
  );
}

export default ExplorePage;