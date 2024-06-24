"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { Carousel as ThreeDCarousel } from "react-responsive-3d-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Carousell = ({ categories, onCategorySelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  const isMobileQuery = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div className="flex flex-col items-center px-3">
      {isMobile ? (
        <ResponsiveCarousel
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          showThumbs={false}
          swipeable
          emulateTouch
          className="w-full"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => onCategorySelect(category)}
              className="cursor-pointer flex flex-col items-center"
            >
              <h1 className="text-center text-lg sm:text-xl bg-black text-white capitalize py-2 w-full">
                {category}
              </h1>
              <img
                src={`/${category}.png`}
                alt={`example-image-${index + 1}`}
                className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
              />
            </div>
          ))}
        </ResponsiveCarousel>
      ) : (
        <ThreeDCarousel
          showStatus={false}
          showIndicators={false}
          arrowsDefaultColor={"white"}
          infiniteLoop={false}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => onCategorySelect(category)}
              className="cursor-pointer"
            >
              <h1 className="text-center text-xl sm:text-2xl bg-black text-white capitalize py-2">
                {category}
              </h1>
              <img
                src={`/${category}.png`}
                alt={`example-image-${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
            </div>
          ))}
        </ThreeDCarousel>
      )}
    </div>
  );
};

export default Carousell;
