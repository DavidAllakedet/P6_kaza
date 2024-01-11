

import React, { useState, useEffect } from 'react';
import { useParams,  } from 'react-router-dom';
//import AccordeonItems from '../../components/LogementCollapse/LogementCollapse';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Etoiles from '../../components/Etoiles/Etoiles';
import data from '../../data/data.json';

import '../../styles/Logement.scss'; // Import the generated CSS file
//import '../../styles/About.scss';
//import { useData } from '../../pages/Utiles/Hooks/Hooks';

import Collapse from '../../components/Collapse/Collapse';
import { useNavigate } from 'react-router-dom'


function Logement () {

  const [openInfo1, setOpenInfo1] = useState(false);
  const [openInfo2, setOpenInfo2] = useState(false);
  
  //let data = useData()
  const param = useParams()
  const [openInfo, setOpenInfo] = useState([false, false])
  const roomItem = data.find((item) => param.id === item.id)
  const logementData = data;
  const navigate = useNavigate()
  // const range = [...Array(5).keys()];
  const { id } = useParams();
  //const [ setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 600);
  // const [accordeonStates, setAccordeonStates] = useState({
  //   description: false,
  //   equipement: false,
  // });

  const selectedLogement = logementData.find((items) => items.id === id);

  // const isRestoring = Object.keys(accordeonStates).length === 0;

  const imageIds = selectedLogement?.pictures || [];

//  // const rating = data.selectedLogement.rating; // Adjust this based on your data structure

//     // Récupérer la valeur de la note depuis data.json
//     const activeStars = selectedLogement?.host?.rating || 0;

useEffect(() => {
  if (roomItem === undefined) navigate('/Error')
}, [roomItem, navigate])

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 600);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const toggle = (section) => {
  //   setAccordeonStates((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section],
  //   }));
  // };

  // useEffect(() => {
  //   const storedAccordeonStates = JSON.parse(localStorage.getItem('accordeonStates'));
  //   if (storedAccordeonStates) {
  //     setAccordeonStates(storedAccordeonStates);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('accordeonStates', JSON.stringify(accordeonStates));
  // }, [accordeonStates]);

  // if (!selectedLogement) {
  //   return (
  //     <div>
  //       <p>Error: Selected logement data not available.</p>
  //       <Navigate to="/error" replace={true} />
  //     </div>
  //   );
  // }
  // const collapseData = [
  //   { id: 1, section: 'description', title: 'Description', description: 'Description content' },
  //   { id: 2, section: 'equipement', title: 'Equipement', description: 'Equipement content' },
  // ];
  // const description = selectedLogement.description || '';
  // const equipments = selectedLogement.equipments || [];

  return (
    <div className="HeaderFooterdiv">
      <Header />
      <div className="RoomC" key={selectedLogement.id}>
        <Carousel itemIds={imageIds} />
        <div className="RoomDiv">
          <div className="RoomContener">
            <div className="RoomContener1">
              <div className="Room1Content1">
                <div className="Room1Content1h1">{selectedLogement.title}</div>
                <div className="Room1Content1p">{selectedLogement.location}</div>
              </div>
              <div className="Tagdiv">
                {selectedLogement.tags &&
                  selectedLogement.tags.map((tag, index) => (
                    <div key={index} className="Tag">
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
            <div className="RoomContener2">
              <div className="RoomContener2Div">
                <div className="Room2Texte">
                  {selectedLogement.host &&
                    selectedLogement.host.name.split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))}
                </div>
                {selectedLogement.host && (
                  <div className="Room2Cercle">
                    <img
                        src={selectedLogement.host.picture}
                        alt="Host"
                        className="HostImage" 
                      />
                  </div>
                )}
              </div>
              <div className="EtoilesDiv">
            <Etoiles LogementRating={selectedLogement.rating} />
          </div>
            </div>
          </div>
          <div className="roominfo3">
        <Collapse
          id={0}
          open={openInfo1}
          setOpen={setOpenInfo1}
          text={<p>{roomItem.description}</p>}
          title="Description"
        />
        <Collapse
          id={1}
          open={openInfo2}
          setOpen={setOpenInfo2}
          text={
            <ul>
              {roomItem.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
          title="Équipements"
        />
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
