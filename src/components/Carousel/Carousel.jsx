import React from 'react';
import styled from 'styled-components';
import singleImage from '../../assets/Logement.png';
import mobileImage from '../../assets/MobileLogement.png';
import CollapseButton from '../../assets/CollapseButton.svg';

const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 1240px;
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
  display: flex;
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
    display:none;
  }
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      <CarouselImage
        src={window.innerWidth <= 600 ? mobileImage : singleImage}
        alt="Image"
      />

      <CarouselButtons>
        <CarouselButton>
          <img src={CollapseButton} alt="Previous" style={{ transform: 'rotate(-90deg)' }} />
        </CarouselButton>

        <CarouselButton>
          <img src={CollapseButton} alt="Next" style={{ transform: 'rotate(90deg)' }} />
        </CarouselButton>
      </CarouselButtons>

      <CarouselP>
        1/4
      </CarouselP>
    </CarouselContainer>
  );
};

export default Carousel;
