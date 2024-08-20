import React from 'react';
import photoVideo from '../assets/photo-video.png';

function CreatePostScreen() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={photoVideo} alt="Photo and Video" className="w-28 h-28" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Select from computer
      </button>
    </div>
  );
}

export default CreatePostScreen;
