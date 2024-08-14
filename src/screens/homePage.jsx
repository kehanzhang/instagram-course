import React from 'react';
import Post from '../components/post';
import instagramLogo from '../assets/Logo-Instagram.png';

function HomePage() {
  return (
    <div>
      <img src={instagramLogo} alt="Instagram" style={{ width: '120px' }} />
      <Post />
    </div>
  );
}

export default HomePage;
