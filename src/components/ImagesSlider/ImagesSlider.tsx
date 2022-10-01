import { useCallback, useState } from "react";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";

interface ImagesSliderProps {
  imagesUrl: Array<{ url: string; alt?: string }>;
}

const ImagesSlider: React.FC<ImagesSliderProps> = ({ imagesUrl }) => {
  const [index, setIndex] = useState(0);
  const nextIndex = useCallback(() => setIndex((i) => i + 1), []);
  const prevImage = useCallback(() => setIndex((i) => i - 1), []);

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-0 h-full text-white opacity-70 enabled:hover:bg-white enabled:hover:bg-opacity-50 enabled:hover:opacity-90 disabled:opacity-0"
        onClick={prevImage}
        disabled={index === 0}
      >
        <LeftArrow />
      </button>
      <img
        className="w-full h-full object-contain"
        src={imagesUrl[index].url}
        alt={imagesUrl[index].alt}
      />
      <button
        className="absolute right-0 top-0 h-full text-white opacity-70 enabled:hover:bg-white enabled:hover:bg-opacity-50 enabled:hover:opacity-90 disabled:opacity-0"
        onClick={nextIndex}
        disabled={index >= imagesUrl.length - 1}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default ImagesSlider;
