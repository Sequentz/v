"use client";
import "./Ratings.css"; // Import component-specific CSS file
import { useState, useEffect, useRef } from "react";

const Ratings = () => {
  const [ratingsVisible, setRatingsVisible] = useState(false);
  const ratingsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setRatingsVisible(entries[0].isIntersecting);
    });

    if (ratingsRef.current) {
      observer.observe(ratingsRef.current);
    }

    return () => {
      if (ratingsRef.current) {
        observer.unobserve(ratingsRef.current);
      }
    };
  }, [ratingsRef]); // Dependency on ratingsRef

  return (
    <div
      ref={ratingsRef}
      className={`ratings-container ${ratingsVisible ? "visible" : ""}`}
    >
      <div className="flex justify-center py-10">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 relative w-60 text-black font-sans">
            <p className="text-lg font-bold mb-2">Jason Dehaes</p>
            <p className="mb-2">
              This is a great product that you will love. Here is its rating:
            </p>
            <div className="flex items-center">
              <div className="flex gap-1 text-yellow-400">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl text-gray-300">★</span>
              </div>
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 relative w-60 text-black font-sans">
            <p className="text-lg font-bold mb-2">Silke Lowet</p>
            <p className="mb-2">
              This is a great product that you will love. Here is its rating:
            </p>
            <div className="flex items-center">
              <div className="flex gap-1 text-yellow-400">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl text-gray-300">★</span>
              </div>
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
          </div>
          {/* Add more ratings as needed */}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
