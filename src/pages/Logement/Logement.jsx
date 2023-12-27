import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AccordeonItems from '../../components/LogementCollapse/LogementCollapse';
import Carousel from '../../components/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import data from '../../data/data.json';

const RoomC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 600px) {
    padding-bottom: 30px;
    width: 335px;
  }
`;

const RoomDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  color: #ff6060;
  padding: 50px 20px;
  gap: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 0;
    width: 335px;
  }
`;

const RoomContener1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 335px;
  }
`;

const Room1Content1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  @media screen and (max-width: 600px) {
    width: 335px;
  }
`;

const Room1Content1h1 = styled.div`
  font-size: 36px;
  font-weight: 500;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Room1Content1p = styled.div`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const RoomContener = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 335px;
    gap: 30px;
  }
`;

const RoomContener2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    flex-direction: row-reverse;
    width: 335px;
  }
`;

const RoomContener2Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
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
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

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

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 335px;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ff6060;
  padding: 5px 40px;
  border-radius: 10px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    padding: 5px 5px;
    border-radius: 10px;
    font-size: 10px;
  }
`;

const AccordeonDiv = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const AccordeonContener = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Accordeon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: Montserrat;
  gap: 4%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const EtoilesDiv = styled.div`
  display: flex;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const Etoile = styled(FontAwesomeIcon)`
  color: ${({ index, totalStars, rating }) => (index < rating ? '#ff6060' : '#c4c4c4')};
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
    flex-direction: column;
  }
`;

const collapseData = [
  {
    id: 1,
    section: 'description',
    title: 'Description',
  },
  {
    id: 2,
    section: 'equipement',
    title: 'Equipement',
    equipments: [],
  },
];

function Logement() {

  const logementData = data;
  const range = [...Array(5).keys()];
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 600);
  const [accordeonStates, setAccordeonStates] = useState({
    description: false,
    equipement: false,
  });

  const selectedLogement = logementData.find((items) => items.id === id);
  
  const isRestoring = Object.keys(accordeonStates).length === 0;

  

  const imageIds = selectedLogement.pictures || [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('isMobile:', isMobile);
  }, [isMobile]);

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

  

  useEffect(() => {
    console.log('ID from params:', id);
  }, [id]);

  console.log('Selected room:', selectedLogement);

  if (!selectedLogement) {
    return <div>Logement non trouvé</div>;
  }
  collapseData[0].description = selectedLogement.description || '';
  collapseData[1].equipments = selectedLogement.equipments || [];

  return (
    <HeaderFooterdiv>
      <Header />
      <RoomC key={selectedLogement.id}>
      <Carousel itemIds={imageIds} />
        <RoomDiv>
          <RoomContener>
            <RoomContener1>
              <Room1Content1>
                <Room1Content1h1>
                  {selectedLogement.title}
                </Room1Content1h1>
                <Room1Content1p>
                  {selectedLogement.location}
                </Room1Content1p>
              </Room1Content1>
              <Tagdiv>
                {selectedLogement.tags && selectedLogement.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tagdiv>
            </RoomContener1>
            <RoomContener2>
              <RoomContener2Div>
                <Room2Texte>
                  {selectedLogement.host &&
                    selectedLogement.host.name.split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))}
                </Room2Texte>

                {selectedLogement.host && (
                  <Room2Cercle imageUrl={selectedLogement.host.picture}></Room2Cercle>
                )}
              </RoomContener2Div>

              <EtoilesDiv>
                {range.map((rangeElem) => (
                  <Etoile
                    key={rangeElem.toString()}
                    index={rangeElem}
                    totalStars={5}
                    rating={selectedLogement.rating}
                    icon={faStar}
                  />
                ))}
              </EtoilesDiv>
            </RoomContener2>
          </RoomContener>
          <AccordeonDiv>
            {isRestoring ? null : (
              <AccordeonContener>
                <Accordeon>
                  {collapseData.map((data) => (
                    <AccordeonItems
                      key={data.id}
                      isOpen={accordeonStates[data.section]}
                      title={data.title}
                      description={
                        data.section === 'description'
                          ? data.description
                          : selectedLogement.equipments && (
                              <p style={{ whiteSpace: 'pre-line' }}>
                                {selectedLogement.equipments.join(',\n')}
                              </p>
                            )
                      }
                      toggle={() => toggle(data.section)}
                    />
                  ))}
                </Accordeon>
              </AccordeonContener>
            )}
          </AccordeonDiv>
        </RoomDiv>
      </RoomC>
      <Footer />
    </HeaderFooterdiv>
  );
}

export default Logement;
