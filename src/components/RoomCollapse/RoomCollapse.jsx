import React, { useState} from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
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
  height:40px;
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

const rotateAnimation = `
  @keyframes rotate {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const StyledIconeFleche = styled(IconeFleche)`
  font-size: 80px;
  transition: transform 0.5s ease;
  ${rotateAnimation}
  transform: ${(props) => (props.rotate ? 'rotate(-180deg)' : 'rotate(0deg)')};
  animation: rotate 0.5s ease;
`;

const AccordeonItems = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRotation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseContainer>
      <CollapseC onClick={handleRotation}>
        <TitleP>{title}</TitleP>
        <IconContainer>
          <StyledIconeFleche rotate={isOpen} />
        </IconContainer>
      </CollapseC>

      <Collapse isOpened={isOpen}>
        <DescC>{description}</DescC>
      </Collapse>
    </CollapseContainer>
  );
};

export default AccordeonItems;
