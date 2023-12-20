import React, { useState } from 'react';
import styled from 'styled-components';
import AccordeonItems from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AccordeonContener = styled.section`
  font-family: Montserrat;
  padding: 15px;
  height: auto;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Accordeon = styled.div`
  padding: 0;
  margin: 0;
  max-width: 1025px;
  gap: 15px;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    max-width: 335px;
  }
`;

const HeaderFooterdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0; 

  @media screen and (max-width: 600px) {
    height: auto;
    margin: 0;
    gap: 0;
    padding: 0;
  }
`;

const AccordeonItemsWrapper = styled.div`
  ${Accordeon} {
    padding: 0;
    margin: 0;
  }
`;

const collapseData = [
  {
    id: 1,
    title: 'Fiabilité',
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sontrégulièrement vérifiées par nos équipes.",
  },
  {
    id: 2,
    title: 'Respect',
    description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
  },
  {
    id: 3,
    title: 'Service',
    description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 4,
    title: 'Sécurité',
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes..",
  },
];

function About() {
  const [accordeonStates, setAccordeonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggle = (id) => {
    setAccordeonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <HeaderFooterdiv>
      <Header />
      <Banner page="About" />
      <AccordeonContener>
        <AccordeonItemsWrapper>
          <Accordeon>
            {collapseData.map((data) => (
              <AccordeonItems
                key={data.id}
                isOpen={accordeonStates[data.id]}
                title={data.title}
                description={data.description}
                toggle={() => toggle(data.id)}
              />
            ))}
          </Accordeon>
        </AccordeonItemsWrapper>
      </AccordeonContener>
      <Footer />
    </HeaderFooterdiv>
  );
}

export default About;
