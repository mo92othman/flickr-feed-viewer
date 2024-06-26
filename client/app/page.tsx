import ImageFeedGallery from "../components/imageFeed/ImageFeedGallery";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
        <ImageFeedGallery/>
      </div>
    </main>
  );
}
