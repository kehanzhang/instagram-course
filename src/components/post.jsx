import React, { useState } from 'react';
import myAsset from '../assets/my_asset.jpeg';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikePressed = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkPressed = () => {
    setIsBookmarked(!isBookmarked);
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
        <div onClick={handleBookmarkPressed}>
          {isBookmarked ? <Bookmark fill="black" color="black" /> : <Bookmark />}
        </div>
      </div>
      <p>This is a post</p>
    </div>
  );
};

export default Post;