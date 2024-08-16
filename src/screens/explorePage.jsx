import React, { useState } from 'react';
import useSWR from 'swr';
import PostPreview from '../components/postPreview';
import QueriedUsers from '../components/queriedUser';
import { Search } from 'lucide-react';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: exploreData, error: exploreError, isLoading: exploreLoading } = useSWR('https://instagram.athensapi.com/api/explore', fetcher);
  const { data: searchData, error: searchError, isLoading: searchLoading } = useSWR(
    searchQuery ? `https://instagram.athensapi.com/api/search?q=${searchQuery}` : null,
    fetcher
  );

  if (exploreError || searchError) return <div>Failed to load</div>;
  if (exploreLoading || searchLoading) return <div>Loading...</div>;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="sticky top-0 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
      </div>
      {searchQuery && searchData ? (
        <div>
          {searchData.map((user, index) => (
            <QueriedUsers key={index} profilePicUrl={user.profile_pic_url} username={user.username} name={user.name} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 flex-grow">
          {exploreData.map((post, index) => (
            <PostPreview key={index} imageUrl={post.image_url} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExplorePage;