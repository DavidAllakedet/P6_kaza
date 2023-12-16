import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

const CollapseContainer = styled.div`
  width: 100%;
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
  height: 40px;
  &:hover {
    background-color: #e04f4f;
  }
`;

const TitleP = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;
`;

const DescC = styled.div`
  background-color: #f6f6f6;
  padding: ${(props) => (props.isOpened ? '20px' : '0 20px')};
  color: #ff6060;
  max-height: ${(props) => (props.isOpened ? '1000px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpened ? '1' : '0')};
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;
  position: relative;

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

  &.fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  &.fade-out {
    animation: fadeOut 0.5s ease;
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
`;
const AccordeonItems = ({ title, description }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
  }, []); // Exécute une fois après le rendu initial

  const handleRotation = () => {
    setIsOpened(!isOpened);
  };

  return (
    <CollapseContainer>
      <CollapseC onClick={handleRotation}>
        <TitleP>{title}</TitleP>
        <IconContainer>
          <StyledIconeFleche rotate={isOpened} initialRender={initialRender} />
        </IconContainer>
      </CollapseC>

      <DescC isOpened={isOpened} className={isOpened ? 'fade-in' : 'fade-out'}>
        {description}
      </DescC>
    </CollapseContainer>
  );
};

export default AccordeonItems;
