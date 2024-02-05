import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../pages/Utiles/Getdata/Getdata';
import '../../styles/Card.scss';

function Card() {
  const list = getData();

  return (
    <div className="card-div">
      <div className="card-ul">
        {list.map((item) => (
          <div className="card-to-logement" key={item.id}>
            <Link to={`/logement/${item.id}`}>
              <div className="card-p">{item.title}</div>
              <img className="card-img" src={item.cover} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Card;