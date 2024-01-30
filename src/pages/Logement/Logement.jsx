import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Etoiles from '../../components/Etoiles/Etoiles';
import data from '../../data/data.json';
import '../../styles/Logement.scss';
import Collapse from '../../components/Collapse/Collapse';
import { useNavigate } from 'react-router-dom';

function Logement() {
  const [openInfo, setOpenInfo] = useState([false, false])
  const param = useParams();
  
  const selectedLogement = data.find((item) => param.id === item.id);
  //const logementData = data;
  const navigate = useNavigate();
 // const { id } = useParams();
  //const selectedLogement = logementData.find((items) => items.id === id);
  const imageIds = selectedLogement?.pictures || [];

  useEffect(() => {
    if (selectedLogement === undefined) navigate('/Error');
  }, [selectedLogement, navigate]);



  return (
    <div className="HeaderFooterdiv">
      <Header />
      <div className="Logement" key={selectedLogement.id}>
        <Carousel itemIds={imageIds} />
        <div className="LogementDiv">
          <div className="LogementInfo">
            <div className="LogementInfo1">
                <h1 className="LogementInfo1__titre">{selectedLogement.title}</h1>
                <p className="LogementInfo1__location">{selectedLogement.location}</p>
                <div className="LogementInfo1__Tagdiv">
                {selectedLogement.tags &&
                  selectedLogement.tags.map((tag, index) => (
                    <div key={index} className="LogementInfo1__Tag">
                      {tag}
                    </div>
                  ))}
                </div>
            </div>
            <div className="LogementInfo2">
              <div className="LogementInfo2__host">
                <p className="LogementInfo2__host--name">{selectedLogement.host.name}</p>
                <div className="LogementInfo2__host--pic">
                  <img src={selectedLogement.host.picture} alt={selectedLogement.host.picture} />
                </div>
              </div>
              <div className="LogementInfo2__Etoiles">
              <Etoiles LogementRating={selectedLogement.rating} />
              </div>
            </div>
          </div>
          <div className="LogementC">
        <Collapse
          id={0}
          open={openInfo}
          setOpen={setOpenInfo}
          text={<p>{selectedLogement.description}</p>}
          title="Description"
        />
        <Collapse
          id={1}
          open={openInfo}
          setOpen={setOpenInfo}
          text={
            <ul>
              {selectedLogement.equipments.map((equip, index) => (
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
