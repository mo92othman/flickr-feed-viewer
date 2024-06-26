import { NextResponse } from 'next/server';
export async function GET() {
  try {
    // Replace with your external API URL
    const apiUrl = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&api_key=${process.env.NEXT_PUBLIC_FLICKR_API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Return the fetched data as the response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
}