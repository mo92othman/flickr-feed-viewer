import React from 'react';
import ImageFeedItem from './ImageFeedItem';

export default function ImageFeedList({ images }) {
  // Check if images is not an array or is empty
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images to display.</p>;
  }

  // Render the list of images if images is an array
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ImageFeedItem key={index} image={image} />
      ))}
    </div>
  );
}
