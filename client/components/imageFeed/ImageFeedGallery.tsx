"use client"

import React, { useEffect, useState } from 'react';
import ImageFeedList from './ImageFeedList';
import { usePathname, useSearchParams } from 'next/navigation';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ImageFeedItem from './ImageFeedItem';


function ImageFeedGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState<string | null>(null);// State to store the extracted tag from the client url

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;
  const queryString = url.split('?')[1]; // Split by '?' and get the second part
  const queryParams = new URLSearchParams(queryString); // Create URLSearchParams object
  const tagFromURL = queryParams.get('q'); // Get the value of 'q'

  useEffect(() => {
    setTag(tagFromURL); // Set the tag state with the value from URL
  }, [tagFromURL]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        let apiUrl = '/api';
        if (tag) {
          apiUrl = `/api/${tag}`; // Adjust API URL based on whether tag exists
        }

        const response = await fetch(apiUrl);
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
  }, [tag]); // Include 'tag' in the dependency array to trigger fetch when tag changes

  // Function to extract images based on the response structure
  const extractImages = (data:any) => {
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
           <div className="animate-spin mt-28">
           <AiOutlineLoading3Quarters size={100}/>
         </div>
        ) : (
          <ImageFeedList images={images} />
        )}
      </div>
    </main>
  );
}

export default ImageFeedGallery;
