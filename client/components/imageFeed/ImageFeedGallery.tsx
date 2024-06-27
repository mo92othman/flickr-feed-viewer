"use client"

import React, { useEffect, useState } from 'react';
import ImageFeedList from './ImageFeedList';

function ImageFeedGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/screen'); // To be adjusted to accept dynamic tags
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();

        // Ensure we always have an array of images
        const fetchedImages = extractImages(data);

        console.log('fetchedImages:', fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching data:', error);
        setImages([]); // Set images to empty array in case of fetch failure
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Function to extract images based on the response structure
  const extractImages = (data) => {
    if (Array.isArray(data.items)) {
      return data.items;
    } else if (data.data && Array.isArray(data.data.items)) {
      return data.data.items;
    } else {
      return [];
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ImageFeedList images={images} />
        )}
      </div>
    </main>
  );
}

export default ImageFeedGallery;
