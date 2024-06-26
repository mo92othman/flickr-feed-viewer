import React from 'react';

export default function ImageFeedGallery() {
  // Dummy for demonstration
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-3 gap-4">
      {placeholders.map((index) => (
        <div key={index} className="  flex justify-center items-center">
          <div className="w-32 h-32 bg-pink-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}