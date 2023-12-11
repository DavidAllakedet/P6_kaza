import React, { useState } from 'react';
import styled from 'styled-components';
import AccordeonItems from '../../components/Collapse';
import Banner from '../../components/Banner/index';

const AccordeonContener = styled.section`
  height: 100%;
  display: grid;
  place-items: center;
  gap: 15px;
`;

const Accordeon = styled.div`
  padding: 20px;
  margin: 20px;
  max-width: 1000px;
  gap: 15px;
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
    <AccordeonContener>
      <Banner page="About" />
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
    </AccordeonContener>
  );
}

export default About;
