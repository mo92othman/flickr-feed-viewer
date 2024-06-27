import React from 'react';
import ImageFeedItem from './ImageFeedItem';

export default function ImageFeedList({ images }) {
  // Render a message if images array is empty
  if (images.length === 0) {
    return <p>No images to display.</p>;
  }

  // Render the list of images
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {images.map((image, index) => (
        <ImageFeedItem key={index} image={image} />
      ))}
    </div>
  );
}
