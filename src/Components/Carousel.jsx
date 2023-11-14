import React, { useEffect, useRef, useState } from 'react';

const images = ['./background-1.png', './background-2.png', './background-3.png'];

const Carousel = () => {
  const [srcImage, setSrcImage] = useState(0);
  let imageRef = useRef(null);

  useEffect(() => {
    imageRef.current = setInterval(() => {
      setSrcImage((prev) => {
        if (prev < 2) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => {
      clearInterval(imageRef.current);
    };
  }, []);

  return (
    <div className="background-container">
      <img src={images[srcImage]} alt="background" />
    </div>
  );
};

export default Carousel;
