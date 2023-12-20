import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

const CollapseContainer = styled.div`
  padding: 10px;

  @media screen and (max-width: 600px) {
    padding: 20px 0;
    width: 100%;
  }
`;

const CollapseC = styled.div`
  background: #ff6060;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04f4f;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const TitleP = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 600px){
    font-size: 14px;
    font-weight: 400;
  }
`;

const DescC = styled.div`
  background-color: #f6f6f6;
  padding: ${(props) => (props.isOpen ? '20px' : '0 20px')};
  color: #ff6060;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;

  animation: ${(props) => (props.isOpen ? 'fadeIn' : 'fadeOut')} 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px); 
    }
  }

  animation: ${(props) => (props.isOpen ? 'fadeIn' : 'fadeOut')} 0.5s ease; 

  @media screen and (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? '20px' : '0 10px')};
  }

  }
`;

const Anim = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px); 
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px); 
    }
  }

  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: opacity 1s ease; 

  animation: ${(props) =>
    props.isOpen ? 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'fadeOut 1s ease'};

    @media screen and (max-width: 600px) {
    padding: ${(props) => (props.isOpen ? '20px' : '0 10px')};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const rotateAnimation = (id) => `
  @keyframes rotate-${id} {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

const StyledIconeFleche = styled(IconeFleche)`
  font-size: 80px;
  transition: transform 0.5s ease;
  ${({ id }) => id && rotateAnimation(id)}
  transform: ${(props) => (props.rotate ? 'rotate(-180deg)' : 'rotate(0deg)')};
  animation: ${({ id }) => id && `rotate-${id}`} 0.5s ease;

  @media screen and (max-width: 600px) {
    font-size: 30px;
`;

const AccordeonItems = ({ id, isOpen, toggle, title, description }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const handleRotation = () => {
    if (!isAnimating) {
      toggle();
      setIsAnimating(true);
    }
  };

  return (
    <CollapseContainer>
      <CollapseC onClick={handleRotation}>
        <TitleP>{title}</TitleP>
        <IconContainer>
          <StyledIconeFleche id={id} rotate={isOpen} />
        </IconContainer>
      </CollapseC>

      <DescC isOpen={isOpen}>
        <Anim isOpen={isOpen}>
          {description}
        </Anim>
      </DescC>
    </CollapseContainer>
  );
};

export default AccordeonItems;
