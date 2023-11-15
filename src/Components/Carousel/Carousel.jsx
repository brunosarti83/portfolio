/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const changePhoto = setTimeout(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((previous) => previous + 1);
      }
    }, 1500);
    return () => clearTimeout(changePhoto);
  }, [currentIndex]);

  return (
    <div className="w-full flex flex-col">
      <img
        key={currentIndex}
        src={images[currentIndex].url}
        className="transition ease-in-out drop-shadow-md"
      />
      {/* <div className="w-full h-[20px] flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[6px] h-[6px] rounded-lg my-auto hover:cursor-pointer ${
              currentIndex === index ? "bg-red-500" : "bg-slate-700"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
