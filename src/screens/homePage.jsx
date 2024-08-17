import React from 'react';
import useSWR from 'swr';
import Post from '../components/post';
import instagramLogo from '../assets/Logo-Instagram.png';

const fetcher = (url) => fetch(url).then((res) => res.json());

function HomePage() {
  const { data: feedData, error } = useSWR('http://instagram.athensapi.com/api/feed', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!feedData) return <div>Loading...</div>;

  return (
    <div>
      <img src={instagramLogo} alt="Instagram" style={{ width: '120px' }} />
      {feedData.map((postData) => (
        <Post key={postData.post_id} postData={postData} />
      ))}
    </div>
  );
}

export default HomePage;
