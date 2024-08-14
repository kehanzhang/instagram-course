import React, { useState } from 'react';
import myAsset from '../assets/my_asset.jpeg';
import { Heart } from 'lucide-react';

function Post() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePressed = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='p-2'>
      <img src={myAsset} alt="my asset" />
      <p>This is a post</p>
      <div onClick={handleLikePressed}>
        {isLiked ? <Heart fill="red" color="red" /> : <Heart />}
      </div>
    </div>
  );
};

export default Post;