"use client"

import React, { useEffect, useState } from 'react';
import ImageFeedList from './ImageFeedList';
import { usePathname, useSearchParams } from 'next/navigation'

function ImageFeedGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}?${searchParams}`
  const queryString = url.split('?')[1]; // Split by '?' and get the second part
  const queryParams = new URLSearchParams(queryString); // Create URLSearchParams object
  const tag = queryParams.get('q'); // Get the value of 'q'
  
  console.log(tag); 

    useEffect(() => {
      
      console.log(url)
    }, [url])

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
