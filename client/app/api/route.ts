import { NextResponse } from 'next/server';
export async function GET() {
  try {

    const apiUrl = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=car&api_key=${process.env.NEXT_PUBLIC_FLICKR_API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Return the fetched data as the response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
}