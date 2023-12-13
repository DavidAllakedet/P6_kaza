import React, { useState } from 'react';
import styled from 'styled-components';
import singleImage from '../../assets/Background.png';
import CollapseButton from '../../assets/CollapseButton.svg';

const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  height: 415px;
  overflow: hidden;
  // text-align: center;
  border-radius: 20px;
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  //text-align: center;
`;

const CarouselButtons = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;

const CarouselP = styled.p`
  position: absolute;
  right: 50%;
  bottom: 0px;
  color: white;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [singleImage];

  const goToPrevSlide = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <CarouselContainer>
      <CarouselImage src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />

      <CarouselButtons>
        <CarouselButton onClick={goToPrevSlide}>
          <img src={CollapseButton} alt="Previous" style={{ transform: 'rotate(-90deg)' }} />
        </CarouselButton>

        <CarouselButton onClick={goToNextSlide}>
          <img src={CollapseButton} alt="Next" style={{ transform: 'rotate(90deg)' }} />
        </CarouselButton>
      </CarouselButtons>

      <CarouselP>
        {currentIndex + 1}/{images.length}
      </CarouselP>
    </CarouselContainer>
  );
};

export default Carousel;
