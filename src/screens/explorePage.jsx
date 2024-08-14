import React from 'react';

function ExplorePage() {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#008000'];

  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {colors.map((color, index) => (
        <div key={index} className="flex items-center justify-center" style={{ backgroundColor: color }}>
          <p className="text-white font-bold">{color}</p>
        </div>
      ))}
    </div>
  );
}

export default ExplorePage;