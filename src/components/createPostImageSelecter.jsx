
import React, { useRef } from 'react';
import photoVideo from '../assets/photo-video.png';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';



function PostImageSelector({ setSelectedImage }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 flex items-center p-4 border-b border-gray-100 w-full"> 
        <Link to="/" className="absolute left-4">
          <X/>
        </Link>
        <p className="text-center text-lg font-semibold flex-grow">New Post</p>
      </div>
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
    </div>
  );
}

export default PostImageSelector;
