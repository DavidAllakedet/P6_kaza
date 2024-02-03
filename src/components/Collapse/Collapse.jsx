import React from 'react';
import button from '../../assets/CollapseButton.svg';

function Collapse({ id, open, setOpen, title, text }) {
  const toggleValueById = (id) => {
    // Copie l'array open pour éviter la mutation directe de l'état
    const updatedOpen = [...open];
    
    // Inverse la valeur de la section spécifique identifiée par id
    updatedOpen[id] = !updatedOpen[id];
    
    // Met à jour l'état global open avec le nouvel array modifié
    setOpen(updatedOpen);
  }
  return (
    <div className="aboutelements">
      <div className="aboutelements__aboutelement">
        <p>{title}</p>
        <button
          className={`aboutelements__aboutelement--button ${
            open[id] ? 'activebutton' : ``
          }`}
          onClick={() => {
            toggleValueById(id)
          }}
        >
          <img className="button--logo" src={button} alt="button de colapse" />
        </button>
      </div>

      <div className={`aboutelement__collapse ${open[id] ? 'bar' : `foo`}`}>
        <div className={`aboutelement__text ${open[id] ? 'visible' : ``}`}>
          {text}
        </div>
      </div>
    </div>
  )
}
export default Collapse
