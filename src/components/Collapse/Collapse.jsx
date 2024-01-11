import button from '../../assets/CollapseButton.svg';
import '../../styles/About.scss';
import React from 'react';

function Collapse({ id, open, setOpen, title, text }) {
  const toggleValueById = (id) => {
    const updatedOpen = [...open];
    updatedOpen[id] = !updatedOpen[id];
    setOpen(updatedOpen);
  };

  return (
    <div className="aboutelements">
      <div className="aboutelements__aboutelement">
        <p>{title}</p>
        <button
          className={`aboutelements__aboutelement--button ${open[id] ? 'activebutton' : ''}`}
          onClick={() => toggleValueById(id)}
        >
          <img className="button--logo" src={button} alt="button de colapse" />
        </button>
      </div>

      <div className={`aboutelement__collapse ${open[id] ? 'bar' : 'foo'}`}>
        <div className={`aboutelement__text ${open[id] ? 'visible' : ''}`}>
          {text}
        </div>
      </div>
    </div>
  );
}


export default Collapse()