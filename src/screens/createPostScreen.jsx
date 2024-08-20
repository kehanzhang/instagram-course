import React, { useState } from 'react';
import PostImageSelector from '../components/createPostImageSelecter';
import CreatePostCaption from '../components/createPostCaption';

function CreatePostScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {!selectedImage ? (
        <PostImageSelector setSelectedImage={setSelectedImage} />
      ) : (
        <CreatePostCaption selectedImage={selectedImage} setSelectedImage={setSelectedImage} className="h-full"/>
      )}
    </>
  );
}

export default CreatePostScreen;
