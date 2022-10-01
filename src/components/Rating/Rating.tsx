import { useState } from "react";

import Star from "../../icons/Star";

interface RatingProps {
  rating: number | null;
  onChange?: (rate: number | null) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onChange }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-row gap-0.5">
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <button
            key={i}
            onMouseEnter={() => onChange && setHovered(i)}
            onMouseLeave={() => onChange && setHovered(null)}
            className={onChange ? "cursor-pointer" : "cursor-auto"}
            onClick={() =>
              onChange && onChange(rating !== i + 1 ? i + 1 : null)
            }
          >
            <Star
              starProps={{
                className:
                  hovered !== null && i <= hovered && rating && i < rating
                    ? "fill-yellow-400"
                    : hovered !== null && i <= hovered
                    ? "fill-yellow-200"
                    : rating && i < rating
                    ? "fill-yellow-300"
                    : undefined,
              }}
            />
          </button>
        ))}
    </div>
  );
};

export default Rating;
