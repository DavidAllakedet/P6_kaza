import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

const CollapseContainer = styled.div`
  padding: 10px;
`;

const CollapseC = styled.div`
  background: #ff6060;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
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
  padding: ${(props) => (props.isOpen ? '20px' : '0 20px')};
  color: #ff6060;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease; /* Transition pour max-height et padding */

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
      transform: translateY(-10px); /* Montez pendant la fermeture */
    }
  }

  animation: ${(props) => (props.isOpen ? 'fadeIn' : 'fadeOut')} 0.5s ease; /* Animation pour l'ouverture et la fermeture */
`;

const Anim = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px); /* Ajustez cette ligne pour définir la position de départ verticale */
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
      transform: translateY(-20px); /* Ajustez cette ligne pour définir la position finale verticale */
    }
  }

  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: opacity 1s ease; /* Transition pour l'opacité */

  animation: ${(props) =>
    props.isOpen ? 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'fadeOut 1s ease'}; /* Utilisation de cubic-bezier pour ralentir l'ouverture */
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
