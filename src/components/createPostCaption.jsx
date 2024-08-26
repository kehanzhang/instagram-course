import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function CreatePostCaption({ selectedImage, setSelectedImage }) {
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    setSelectedImage(null);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleCreatePost = async () => {
    try {
      const response = await fetch('https://instagram.athensapi.com/api/getImageUploadUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessKey: import.meta.env.VITE_APIaccessKey,
          fileName: selectedImage.name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get presigned URL');
      }

      const { uploadURL, publicURL } = await response.json();

      await fetch(uploadURL, {
        method: 'PUT',
        body: selectedImage.file,
        headers: {
          'Content-Type': selectedImage.type,
        },
      });

      toast.success(`Public URL: ${publicURL}`);
      navigate('/');
    } catch (error) {
      toast.error(`Failed to create post. Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4">
      <div className="flex items-center border-b border-gray-100 w-full"> 
        <ChevronLeft onClick={handleBackClick} className="absolute left-4" />
        <p className="text-center text-lg font-semibold flex-grow">New Post</p>
      </div>

      <div className="flex flex-col w-full flex-grow justify-around">
        <div className="flex flex-col justify-center">
          <img 
            src={selectedImage.url} 
            alt="Selected" 
            className="object-contain rounded-md self-center max-h-[50vh]"
          />
          <textarea
            value={caption}
            onChange={handleCaptionChange}
            className="flex-grow p-2 h-20 resize-none outline outline-neutral-200 rounded-md mt-8"
            placeholder="Write a caption..."
          />
        </div>
      </div>
      <button 
        className="text-white bg-blue-500 py-2 w-full rounded-md font-semibold"
        onClick={handleCreatePost}
      >
        Share
      </button>
    </div>
  );
}

export default CreatePostCaption;
