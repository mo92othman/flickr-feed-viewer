import React from 'react';

export default function ImageFeedItem({ image }) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-32 h-32 bg-pink-400 rounded-md">
        <img src={image.media.m} alt={image.title} className="w-full h-full object-cover rounded-md" />
      </div>
    </div>
  );
}
