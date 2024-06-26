import ImageFeedGallery from "../components/imageFeed/imageFeedGallery";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hi there!</h1>
        <ImageFeedGallery/>
      </div>
    </main>
  );
}
