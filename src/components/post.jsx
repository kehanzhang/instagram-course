import React, { useState } from 'react';
import myAsset from '../assets/my_asset.jpeg';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import Avatar from './avatar';

function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const username = "johndoe"; // You can change this to any username you prefer
  const handleLikePressed = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkPressed = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <div className="flex items-center p-2">
        <Avatar isForPost={true}/>
        <span className="ml-2 font-bold">{username}</span>
      </div>
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
      <div className="px-2 flex">
        <p className="font-bold mr-1">{username}</p>
        <p>This is a post</p>
      </div>
    </div>
  );
};

export default Post;