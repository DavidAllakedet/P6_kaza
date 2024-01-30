import React, { useState } from 'react';
import '../../styles/About.scss';
import Collapse from '../../components/Collapse/Collapse';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

function About() {
  const [open, setOpen] = useState([false, false, false]);

  return (
    <div className='HeaderFooterdiv'>
      <Header />
      <div className="About">
        <Banner page="About"  />
        <Collapse
          id={0}
          open={open}
          setOpen={setOpen}
          text={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les
              photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.
            </p>
          }
          title={'Fiabilité'}
        />
        <Collapse
          id={1}
          open={open}
          setOpen={setOpen}
          text={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
          title={'Respect'}
        />
        <Collapse
          id={2}
          open={open}
          setOpen={setOpen}
          text={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
          title={'Service'}
        />
        <Collapse
          id={3}
          open={open}
          setOpen={setOpen}
          text={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien à
              l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
              les standards sont bien respectés. Nous organisons également des
              ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
          title={'Sécurité'}
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
