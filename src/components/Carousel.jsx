// components/Responsive3DCarousel.jsx
"use client";

import { Carousel } from "react-responsive-3d-carousel";
// import "react-responsive-3d-carousel/lib/styles.css";

const Carousell = () => {
  const handleFilter = () => {};
  return (
    <div className="flex justify-center items-center px-3 ">
      <Carousel
        showStatus={false}
        showIndicators={false}
        arrowsDefaultColor={"white"}
        infiniteLoop={true}
      >
        <div>
          <h1 className="text-center text-2xl bg-black">Merchandise</h1>
          <img src="/merch.png" alt="example-image-1" />
        </div>

        <div>
          <h1 className="text-center text-2xl bg-black">Snacks</h1>
          <img src="/bars.jpeg" alt="example-image-2" />
        </div>

        <div>
          <h1 className="text-center text-2xl bg-black">Drinks</h1>
          <img src="/drinkz.png" alt="example-image-3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousell;
