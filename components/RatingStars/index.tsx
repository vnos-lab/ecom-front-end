import React, { memo } from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  percent?: number;
}

const arrayStars = Array.from({ length: 5 }, (_, i) => i + 1);

function RatingStars(props: RatingStarsProps) {
  const { percent = 50 } = props;

  return (
    <div className="flex">
      <div className="relative">
        <div className="flex">
          {arrayStars.map((item) => (
            <Star
              key={`un-rated-${item}`}
              className="text-mx-unrated-star min-w-[1.25rem]"
              fill="currentColor"
              stroke="transparent"
              size={20}
            />
          ))}
        </div>

        <div
          className={`flex absolute top-0 left-0 w-[${percent}%] h-full overflow-hidden`}
        >
          {arrayStars.map((item) => (
            <Star
              key={`un-rated-${item}`}
              className="text-mx-rated-star min-w-[1.25rem]"
              fill="currentColor"
              stroke="transparent"
              size={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(RatingStars);
