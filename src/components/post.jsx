import React from 'react';
import myAsset from '../assets/my_asset.jpeg';

function Post() {
  return (
    <div className='p-2'>
      <img src={myAsset} alt="my asset" />
      <p>This is a post</p>
    </div>
  );
};

export default Post;