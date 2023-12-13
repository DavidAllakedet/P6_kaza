import styled from 'styled-components';
import React, { useState,useEffect } from 'react';
import AccordeonItems from '../../components/RoomCollapse/RoomCollapse';
import Carousel from '../../components/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RoomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 100%;
  color: #ff6060;
  padding:50px 0;
  gap:30px;
`;

const RoomContener1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Room1Content1 = styled.div`
display:flex;
flex-direction:column;
//width: 100%;
`;
const Room1Content1h1 = styled.div`
width:auto;
font-size:50px;
`
const Room1Content1p = styled.div`
font-size:20px;
`
const Room2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Room1Cercle = styled.div`
width: 60px;
height:60px;
background-color: #C4C4C4;
border-radius:30px;
`;
const Room1Content2 = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`
const Room1Content2p = styled.div`
font-size: 20px;
`
const Tagdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const Tag = styled.div`
  color: white;
  background-color: #ff6060;
  padding: 5px 30px;
  border-radius: 15px;
`;

const AccordeonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap:40px;
`;

const AccordeonContener = styled.section`
 width:60%;
`;

const Accordeon = styled.div`

`;

const EtoilesDiv = styled.div`
  display: flex;
  font-size:30px;
`;

const Etoile = styled(FontAwesomeIcon)`
  color: ${({ index, totalStars }) => (index < totalStars - 2 ? '#ff6060' : '#C4C4C4')};
`;

const collapseData = [
  {
    id: 1,
    section: 'description',
    title: 'Description',
    description: "Les annonces postées sur Kasa garantissent une fiabilité totale.",
  },
  {
    id: 2,
    section: 'equipement',
    title: 'Equipement',
    description: [
      "Parking",
      "Sèche Cheveux",
      "Machine à laver",
      "Wi-fi",
      "Cuisine équipée",
      "Télévision",
    ],
  },
];

function Room() {
  const [accordeonStates, setAccordeonStates] = useState({
    description: false,
    equipement: false,
  });

  const toggle = (section) => {
    setAccordeonStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  useEffect(() => {
  
    const storedAccordeonStates = JSON.parse(localStorage.getItem('accordeonStates'));
    if (storedAccordeonStates) {
      setAccordeonStates(storedAccordeonStates);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('accordeonStates', JSON.stringify(accordeonStates));
  }, [accordeonStates]);

  const isRestoring = Object.keys(accordeonStates).length === 0;

  return (
    <>
      <Carousel />
      <RoomDiv>
        <RoomContener1>
          <Room1Content1>
            <Room1Content1h1>Cozy loft on the Canal Saint-Martin</Room1Content1h1>
            <Room1Content1p>Paris, Île-de-France</Room1Content1p>
          </Room1Content1>
          <Room1Content2>
            <Room1Content2p>Alexandre <br /> Dumas</Room1Content2p>
            <Room1Cercle></Room1Cercle>
          </Room1Content2>
        </RoomContener1>
        <Room2>
          <Tagdiv>
            <Tag>Cozy</Tag>
            <Tag>Canal</Tag>
            <Tag>Paris 10</Tag>
          </Tagdiv>
          <EtoilesDiv>
            {[...Array(5).keys()].map((index) => (
              <Etoile key={index} index={index} totalStars={5} icon={faStar} />
            ))}
          </EtoilesDiv>
        </Room2>
        <AccordeonDiv>
          {isRestoring ? null : (
            <>
              <AccordeonContener>
                <Accordeon>
                  {collapseData
                    .filter((data) => data.section === 'equipement')
                    .map((data) => (
                      <AccordeonItems
                        key={data.id}
                        isOpen={accordeonStates.equipement}
                        title={data.title}
                        description={data.description}
                        toggle={() => toggle('equipement')}
                      />
                    ))}
                </Accordeon>
              </AccordeonContener>
              <AccordeonContener>
                <Accordeon>
                  {collapseData
                    .filter((data) => data.section === 'description')
                    .map((data) => (
                      <AccordeonItems
                        key={data.id}
                        isOpen={accordeonStates.description}
                        title={data.title}
                        description={data.description}
                        toggle={() => toggle('description')}
                      />
                    ))}
                </Accordeon>
              </AccordeonContener>
            </>
          )}
        </AccordeonDiv>
      </RoomDiv>
    </>
  );
}

export default Room;
