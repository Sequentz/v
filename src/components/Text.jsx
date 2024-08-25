"use client";
import { useState, useEffect, useRef } from "react";
import "./Text.css"; // Assuming your styles are in Text.css

const Text = () => {
  const [textVisible, setTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setTextVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef]);

  return (
    <div ref={textRef}>
      <div className="mr-48">
        <h3
          className={`text-black pb-16 ${
            textVisible ? "slide-in-right visible" : ""
          }`}
          style={{ fontSize: "calc(2rem + 1vw)" }}
        >
          Roar in het kort
        </h3>
        <p
          className={`text-black font-sans ${
            textVisible ? "slide-in-left visible" : ""
          }`}
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
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
