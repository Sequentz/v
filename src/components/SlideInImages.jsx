"use client";
import React, { useState, useEffect } from "react";
import "./SlideInImages.css"; // Import component-specific CSS file

const SlideInImages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logic to trigger animation or state change
    setIsVisible(true);
  }, []);

  return (
    <div className="relative col-span-1">
      <img
        src="/zaal.png"
        alt="zaal"
        className={`w-[300px] h-[300px] object-cover rounded-xl shadow-xl ml-10 ${
          isVisible ? "slide-in-left" : ""
        }`}
      />
      <img
        src="/image.png"
        alt="short"
        className={`w-[220px] h-[220px] object-cover rounded-xl absolute left-52 bottom-5 shadow-xl ${
          isVisible ? "slide-in-left" : ""
        }`}
      />
    </div>
  );
};

export default SlideInImages;
