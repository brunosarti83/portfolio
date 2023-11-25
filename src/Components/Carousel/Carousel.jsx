/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // this useEffect is supposed to force react to preload images resulting in less junkiness; not sure it works, will test in production
  useEffect(() => {
    images.forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
    });
  }, []);

  useEffect(() => {
    const changePhoto = setTimeout(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((previous) => previous + 1);
      }
    }, 5000);
    return () => clearTimeout(changePhoto);
  }, [currentIndex]);

  return (
    <div className="w-full flex flex-col">
      <img
        key={currentIndex}
        src={images[currentIndex].url}
        className="shadow-lg shadow-gray-400 animate-fade"
      />
    </div>
  );
}
