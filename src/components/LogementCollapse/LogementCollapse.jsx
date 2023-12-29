import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: 100%;

`;


const CollapseC = styled.div`
  background: #ff6060;
  padding: 0px 20px 0px 10px;
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
    padding: 0px 20px 0px 10px;
    border-radius: 5px;
    height:40px;
  }
`;

const TitleP = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const DescC = styled.div`
  background-color: #f6f6f6;
  padding: ${(props) => (props.isopened ? '20px' : '0 20px')};
  color: #ff6060;
  max-height: ${(props) => (props.isopened ? '1000px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isopened ? '1' : '0')};
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;
  position: relative;
  height: 100%; 

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

  @media screen and (max-width: 600px) {
    padding: ${(props) => (props.isopened ? '10px' : '0 10px')};
    font-size: 12px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const rotateAnimation = (id) => css`
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
width: 32px;
height: 32px;
  transition: transform 0.5s ease;
  ${({ id }) => id && rotateAnimation(id)}
  transform: ${(props) => (props.rotate ? 'rotate(-180deg)' : 'rotate(0deg)')};
  animation: ${({ id }) => id && `rotate-${id}`} 0.5s ease;

  @media screen and (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
`;

const AccordeonItems = ({ title, description }) => {
  const [isopened, setisopened] = useState(0);
  const [initialrender, setinitialrender] = useState(1);

  useEffect(() => {
    setinitialrender(0);
  }, []); 

  const handleRotation = () => {
    setisopened(!isopened);
  };

  return (
    <CollapseContainer>
      <CollapseC onClick={handleRotation}>
        <TitleP>{title}</TitleP>
        <IconContainer>
          <StyledIconeFleche rotate={isopened} initialrender={initialrender} />
        </IconContainer>
      </CollapseC>

      <DescC isopened={isopened} className={isopened ? 'fade-in' : 'fade-out'}>
        {description}
      </DescC>
    </CollapseContainer>
  );
};




export default AccordeonItems;
