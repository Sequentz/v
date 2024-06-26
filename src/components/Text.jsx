"use client";
import { useState, useEffect, useRef } from "react";
import "./Text.css"; // Assuming your styles are in Text.css

const Text = () => {
  const [textVisible, setTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setTextVisible(entries[0].isIntersecting);
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef]); // Dependency on textRef to ensure observer is attached/detached

  return (
    <div ref={textRef}>
      <div className="mr-48">
        <h3
          className={`text-black text-4xl ${
            textVisible ? "slide-in-right visible" : ""
          }`}
        >
          Roar in het kort
        </h3>
        <p
          className={`text-black font-sans ${
            textVisible ? "slide-in-left visible" : ""
          }`}
        >
          Leave the games at the door. ROAR is for those who prioritize quality
          training and unleash their potential. We focus on efficiency,
          dedication, and transformation, not wasted time.
        </p>
      </div>
    </div>
  );
};

export default Text;
