"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-3d-carousel";

const Carousell = ({ categories, onCategorySelect }) => {
  return (
    <div className="flex flex-col items-center px-3">
      <Carousel
        showStatus={false}
        showIndicators={false}
        arrowsDefaultColor={"white"}
        infiniteLoop={false}
      >
        {categories.map((category, index) => (
          <div key={index} onClick={() => onCategorySelect(category)}>
            <h1 className="text-center text-xl sm:text-2xl bg-black capitalize py-2">
              {category}
            </h1>
            <img
              src={`/${category}.png`}
              alt={`example-image-${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;
