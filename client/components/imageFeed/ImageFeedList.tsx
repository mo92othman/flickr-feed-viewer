import { ImageData  } from './Types'
import ImageFeedItem from './ImageFeedItem';

interface ImageFeedListProps {
  images: ImageData[];
}

const ImageFeedList: React.FC<ImageFeedListProps> = ({ images }) => {
  // Render the list of images
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {images.map((image, index) => (
        <ImageFeedItem key={index} image={image} />
      ))}
    </div>
  );
}

export default ImageFeedList;