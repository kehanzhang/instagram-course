import React from 'react';
import myAsset from '../assets/my_asset.jpeg';
import { Heart } from 'lucide-react';

function Post() {
  return (
    <div className='p-2'>
      <img src={myAsset} alt="my asset" />
      <p>This is a post</p>
      <Heart />
      <Heart fill="red" color="red" />
    </div>
  );
};

export default Post;