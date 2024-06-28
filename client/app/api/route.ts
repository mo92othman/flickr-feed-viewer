import { NextResponse } from 'next/server';
type Error = {
  error: string;
};

export const GET = async () => {
  try {
    const apiUrl = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&api_key=${process.env.NEXT_PUBLIC_FLICKR_API_KEY}`;
    const response = await fetch(apiUrl, { next: { revalidate: 15 } },);
    const data = await response.json();
    // Return the fetched data as the response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(error);
  }
};
