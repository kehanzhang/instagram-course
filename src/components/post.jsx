import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import Avatar from './avatar';

function Post({ postData }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikePressed = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkPressed = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formatLikeCount = (count) => {
    if (count >= 1000000) {
      return `${Math.round(count / 1000000)}M`;
    } else if (count >= 1000) {
      return `${Math.round(count / 1000)}K`;
    } else {
      return count.toString();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="flex items-center p-2">
        <Avatar src={postData.profile_pic_url} size="small" />
        <span className="ml-2 font-bold">{postData.username}</span>
      </div>
      <img src={postData.image_url} alt={postData.caption_text} />
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
      <div className="px-2">
        <p className="font-bold">{formatLikeCount(postData.like_count)} likes</p>
        <p><span className="font-bold mr-1">{postData.username}</span>{postData.caption_text}</p>
        <p className="text-gray-500 text-sm">{formatDate(postData.taken_at)}</p>
      </div>
    </div>
  );
};

export default Post;