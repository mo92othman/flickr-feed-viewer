import Image from 'next/image'
export default function ImageFeedItem({ image }) {
  return (
    <div className="flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="w-full h-full bg-pink-400 rounded-md ">
        <img src={image.media.m} alt={image.title} className="w-full h-full object-cover rounded-md " />
      </div>
    </div>
  );
}
