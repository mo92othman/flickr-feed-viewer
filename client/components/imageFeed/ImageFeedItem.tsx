import Image from 'next/image';

export default function ImageFeedItem({ image }) {
  return (
    <div className="relative flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <div className="w-full h-80 bg-pink-400 rounded-md overflow-hidden">
        <img src={image.media.m} alt={image.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-pink-800 bg-opacity-60 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="text-white text-lg mt-36 px-4">{image.title}</span>
        </div>
      </div>
    </div>
  );
}
