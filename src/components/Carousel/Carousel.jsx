import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CollapseButton from '../../assets/CollapseButton.svg';

const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  width: 1240px;
  height: 415px;
  overflow: hidden;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 335px;
    height: 255px;
  }
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    width: 335px;
    height: 255px;
  }
`;

const CarouselButtons = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  display:flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    width: 335px;
  }
`;

const CarouselButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const CarouselP = styled.p`
  position: absolute;
  right: 50%;
  bottom: 0px;
  color: white;

  @media screen and (max-width: 600px) {
    
  }
`;

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
    <CarouselContainer>
      {pictures.length > 0 ? (
        <>
          <CarouselImage src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />

          {pictures.length > 1 && ( 
            <CarouselButtons>
              <CarouselButton onClick={goToPrevSlide}>
                <img src={CollapseButton} alt="Previous" style={{ transform: 'rotate(-90deg)' }} />
              </CarouselButton>

              <CarouselButton onClick={goToNextSlide}>
                <img src={CollapseButton} alt="Next" style={{ transform: 'rotate(90deg)' }} />
              </CarouselButton>
            </CarouselButtons>
          )}

          {pictures.length > 1 && (
            <CarouselP>
              {currentIndex + 1}/{pictures.length}
            </CarouselP>
          )}
        </>
      ) : (
        <p>No pictures available</p>
      )}
    </CarouselContainer>
  );
};

export default Carousel;