import React from 'react';
import PostPreview from './postPreview';

const GridPostPreviews = ({ postData }) => {
  return (
    <div className="grid grid-cols-3 flex-grow">
      {postData.map((post, index) => (
        <PostPreview key={index} imageUrl={post.image_url} />
      ))}
    </div>
  );
};

export default GridPostPreviews;
