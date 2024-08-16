import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import Avatar from './avatar';

function Post({ postData = {"post_id":"3426929691603728563_314216","user_id":51,"taken_at":"2024-08-04T03:24:35.000Z","caption_text":"Taking a party bus full of girls to see @oliviarodrigo #girldad","image_url":"https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/zuck/3426929691603728563_314216.jpg","width":750,"height":938,"like_count":720267,"comment_count":9270,"username":"zuck","profile_pic_url":"https://pub-8d448faaa1ab42978ed5c4b22198f47d.r2.dev/instagram-mock-data/zuck/profile_pic_zuck.jpg","name":"Mark Zuckerberg"}
}) {
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
        <Avatar profilePicUrl={postData.profile_pic_url} isForPost={true} />
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