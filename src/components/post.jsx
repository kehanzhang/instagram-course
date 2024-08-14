import React, { useState } from 'react';
import myAsset from '../assets/my_asset.jpeg';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

function Post() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePressed = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <img src={myAsset} alt="my asset" />
      <div className='flex justify-between m-2'>
        <div className='flex space-x-3'>
          <div onClick={handleLikePressed}>
            {isLiked ? <Heart fill="red" color="red" /> : <Heart />}
          </div>
          <MessageCircle />
          <Send />
        </div>
        <Bookmark />
      </div>
      <p>This is a post</p>
    </div>
  );
};

export default Post;