"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerCarousel = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Load images from external URLs
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then((loadedImages) => setImages(loadedImages))
      .catch((error) => console.error('Error loading images:', error));
  }, [imageUrls]);

  useEffect(() => {
    // Automatically change images every 2 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, [currentIndex, images]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const DotIndicator = ({ active }) => (
    <span
      className={`inline-block w-3 h-3 bg-gray-500 rounded-full mx-2 ${
        active ? 'bg-gray-800' : 'bg-gray-300'
      }`}
    />
  );

  return (
    <div className="relative">
      <div className="w-[100%] relative h-[300px] mx-auto overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-[100%] mx-auto h-[300px] transition-transform duration-500 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
        ))}
      </div>
      
      {/* <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <DotIndicator key={index} active={index === currentIndex} />
        ))}
      </div> */}
    </div>
  );
};

export default BannerCarousel;
