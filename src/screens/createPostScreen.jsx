import React, { useState, useRef } from 'react';
import photoVideo from '../assets/photo-video.png';

function CreatePostScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage({file: file, name: file.name, type: file.type, url: imageUrl});
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={photoVideo} alt="Photo and Video" className="w-28 h-28" />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Select from computer
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      {selectedImage && (
        <img src={selectedImage.url} alt="Selected" className="mt-4 max-w-xs max-h-xs" />
      )}
    </div>
  );
}

export default CreatePostScreen;
