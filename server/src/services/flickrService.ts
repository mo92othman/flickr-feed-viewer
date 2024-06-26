import fetch from 'node-fetch';

const FLICKR_API_URL = 'https://www.flickr.com/services/feeds/photos_public.gne';

const fetchJson = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

const FlickrService = {
  getPublicPhotos: async () => {
    const apiUrl = `${FLICKR_API_URL}?format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_KEY}`;
    const data = await fetchJson(apiUrl) as { items: any[] }; 
    return data.items;
  },

  searchPublicPhotos: async (tags: string) => {
    const apiUrl = `${FLICKR_API_URL}?format=json&nojsoncallback=1&tags=${tags}&api_key=${process.env.FLICKR_API_KEY}`;
    const data = await fetchJson(apiUrl) as { items: any[] }; 
    return data.items;
  },
};

export default FlickrService;
