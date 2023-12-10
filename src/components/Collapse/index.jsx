import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

const CollapseContainer = styled.div`
  padding: 10px;
  width: 1000px;
`;

const CollapseC = styled.div`
  background: #ff6060;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;
transition :height 500ms;
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
  padding: 20px 50px;
  color: #ff6060;
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
  transform: ${(props) => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
  animation: ${({ id }) => id && `rotate-${id}`} 0.5s ease;
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

      <Collapse isOpened={isOpen}>
        <DescC>{description}</DescC>
      </Collapse>
    </CollapseContainer>
  );
};

export default AccordeonItems;
