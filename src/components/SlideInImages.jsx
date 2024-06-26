"use client";
import React, { useState, useEffect, useRef } from "react";
import "./SlideInImages.css"; // Import component-specific CSS file

const SlideInImages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]); // Dependency on imageRef to ensure observer is attached/detached

  return (
    <div ref={imageRef} className="relative col-span-1 ml-28">
      <img
        src="/zaal.png"
        alt="zaal"
        className={`w-[300px] h-[300px] object-cover rounded-xl shadow-xl ml-10 ${
          isVisible ? "slide-in-left visible" : ""
        }`}
      />
      <img
        src="/image.png"
        alt="short"
        className={`w-[220px] h-[220px] object-cover rounded-xl absolute left-52 bottom-5 shadow-xl ${
          isVisible ? "slide-in-left visible" : ""
        }`}
      />
    </div>
  );
};

export default SlideInImages;
