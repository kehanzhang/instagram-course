import React from 'react';

function PostPreview({ imageUrl}) {
  return (
      <img src={imageUrl} alt="Post preview" className="w-full h-full object-cover" />
  );
}

export default PostPreview;
