import React from 'react';
import useSWR from 'swr';
import PostPreview from '../components/postPreview';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ExplorePage() {
  const { data: exploreData, error, isLoading } = useSWR('https://instagram.athensapi.com/api/explore', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {exploreData.map((post, index) => (
        <PostPreview key={index} imageUrl={post.image_url} />
      ))}
    </div>
  );
}

export default ExplorePage;