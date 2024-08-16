import React, { useEffect, useState } from 'react';
import PostPreview from '../components/postPreview';

function ExplorePage() {
  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        const response = await fetch('https://instagram.athensapi.com/api/exploreWithDelay');
        const data = await response.json();
        setExploreData(data);
      } catch (error) {
        console.error('Error fetching explore data:', error);
      }
    };

    fetchExploreData();
  }, []);

  if (exploreData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {exploreData.map((post, index) => (
        <PostPreview key={index} imageUrl={post.image_url} />
      ))}
    </div>
  );
}

export default ExplorePage;