import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../pages/Utiles/Hooks/Hooks';
import '../../styles/Card.scss';

function Card() {
  const data = useData();

  return (
    <div className="card-div">
      <div className="card-ul">
        {data.map((item) => (
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
