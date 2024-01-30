// Carousel.js

import React, { useState, useEffect } from 'react';
import CollapseButton from '../../assets/CollapseButton.svg';
import '../../styles/Carousel.scss';

const Carousel = ({ itemIds }) => {
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setPictures(itemIds);
  }, [itemIds]);

  const goToPrevSlide = () => {
    setCurrentIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="carousel-container">
      {pictures.length > 0 ? (
        <>
          <img className="carousel-image" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

          {pictures.length > 1 && ( 
            <div className="carousel-buttons">
              <div className="carousel-button" onClick={goToPrevSlide}>
                <img src={CollapseButton} alt="Previous" style={{ transform: 'rotate(-90deg)' }} />
              </div>

              <div className="carousel-button" onClick={goToNextSlide}>
                <img src={CollapseButton} alt="Next" style={{ transform: 'rotate(90deg)' }} />
              </div>
            </div>
          )}

          {pictures.length > 1 && (
            <p className="carousel-p">
              {currentIndex + 1}/{pictures.length}
            </p>
          )}
        </>
      ) : (
        <p>No pictures available</p>
      )}
    </div>
  );
};

export default Carousel;
