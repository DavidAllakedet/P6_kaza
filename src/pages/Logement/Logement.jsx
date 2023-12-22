import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import AccordeonItems from '../../components/LogementCollapse/LogementCollapse';
import Carousel from '../../components/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const RoomC = styled.div`
display:flex;
flex-direction:column;
@media screen and (max-width: 600px) {
  gap:30px;
  padding-bottom:30px;
   width:335px;

`
const RoomDiv = styled.div`
   width: 100%;
   max-width: 1240px; 
  color: #ff6060;
  padding: 50px 20px;
  gap: 30px;
  margin: auto;
  display:flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
   padding:0;
   width:335px;
  
`;

const RoomContener1 = styled.div`
  display:flex;
  flex-direction: column;
  gap:30px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    flex-direction:column;
    width:335px;
  }
`;

const TexteContener = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 600px) {
    width:335px;
  }
`;


const Room1Content1h1 = styled.div`
  font-size: 36px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;


const Room1Content1p = styled.div`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size:14px;
  }
`;

const RoomContener = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
font-family: Montserrat;

@media screen and (max-width: 600px) {
  flex-direction: column;
  width:335px;
  gap:30px;
}
  
`;

const RoomContener2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  gap: 30px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    flex-direction:row-reverse;
    width:335px;
    
  }
`;
const RoomContener2Div = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
gap:10px;

`;

const Room2Texte = styled.div`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
const Room2Cercle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 30px;

  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;

  }
`;

const Tagdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const Tag = styled.div`
display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  background-color: #ff6060;
  padding: 5px 40px;
  border-radius: 10px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    padding: 3px 0;
    font-size: 12px;
    width: 84px;
    height: 18px;
    flex-shrink: 0;
  
`;

const AccordeonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap:50px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width:335px;
    align-items: center;
    gap:20px;
  }
`;

const AccordeonContener = styled.section`
   width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction:column;
  }
`;

const Accordeon = styled.div`
  font-family: Montserrat;

`;

const EtoilesDiv = styled.div`
  display: flex;
  font-size: 20px;

  @media screen and(max-width: 600px) {
   justify-content:center;
    align-items:center;

  }
`;

const Etoile = styled(FontAwesomeIcon)`
  color: ${({ index, totalStars }) => (index < totalStars - 2 ? '#ff6060' : '#c4c4c4')};
  margin-right: 10px; 

  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-right: 5px;
  }
`;


const HeaderFooterdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction:column; 
  }
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
      "Climatisation", <br key="line-break" />,
      "Wi-Fi", <br key="line-break" />,
      "Cuisine", <br key="line-break" />,
      "Espace de travail", <br key="line-break" />,
      "Fer à repasser", <br key="line-break" />,
      "Sèche-cheveux", <br key="line-break" />,
      "Cintres",
    ],
  },
];

function Logement() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <HeaderFooterdiv>
      <Header />
      <RoomC>
        <Carousel />
        <RoomDiv>
            <RoomContener>
                <RoomContener1>
                    <TexteContener>
                      <Room1Content1h1 isMobile={isMobile}>
                        {isMobile ? (
                          <>
                            Paris center,  on the romantic<br /> Canal Saint-Martin
                          </>
                        ) : (
                          'Cozy loft on the Canal Saint-Martin'
                        )}
                      </Room1Content1h1>

                      <Room1Content1p>Paris, Île-de-France</Room1Content1p>
                    </TexteContener>
                    <Tagdiv>
                      <Tag>Cozy</Tag>
                      <Tag>Canal</Tag>
                      <Tag>Paris 10</Tag>
                    </Tagdiv>
                  </RoomContener1>
                  <RoomContener2>
                      <RoomContener2Div>
                        <Room2Texte>
                            Alexandre <br key="line-break" /> Dumas
                        </Room2Texte>
                        <Room2Cercle></Room2Cercle> 
                      </RoomContener2Div>
                      <EtoilesDiv>
                            {[...Array(5).keys()].map((index) => (
                              <Etoile key={index} index={index} totalStars={5} icon={faStar} />
                            ))}
                      </EtoilesDiv>
                  </RoomContener2>
            </RoomContener>
            <AccordeonDiv>
                {isRestoring ? null : (
                  <>
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
                  </>
                )}
            </AccordeonDiv>
        </RoomDiv>
      </RoomC>
      <Footer />
    </HeaderFooterdiv>
  );
}

export default Logement;
