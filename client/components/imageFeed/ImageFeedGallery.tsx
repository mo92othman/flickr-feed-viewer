import ImageFeedList from './ImageFeedList';

async function ImageFeedGallery() {
  async function getServerSideProps() {
    try {
      const response = await fetch('http://localhost:3000/api');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array in case of fetch failure
    }
  }

  const images = await getServerSideProps();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hi thereeeeee!</h1>
        <ImageFeedList images={images} />
      </div>
    </main>
  );
}

export default ImageFeedGallery;
