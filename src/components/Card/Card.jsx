import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useData } from '../../pages/Utiles/Hooks/Hooks';

const Carddiv = styled.div`
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 1240px;
`;

const Cardul = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  padding: 0;
`;

const CardToLogement = styled.div`
  flex: 0 0 29.3%;
  margin: 20px 2%;
  height: 340px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

const Cardp = styled.div`
  display: inline;
  position: absolute;
  width: 120px;
  height: auto;
  bottom: 0;
  left: 10px;
  color: white;
  z-index: 2;
  font-size: 18px;
`;

const Cardimg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(0.9);
`;
function Card() {
  const data = useData();

  return (
    <Carddiv>
      <Cardul>
        {data.map((item) => (
          <CardToLogement key={item.id}>
            <Link to={`/logement/${item.id}`}>
              <Cardp>{item.title}</Cardp>
              <Cardimg src={item.cover} alt={item.title} />
            </Link>
          </CardToLogement>
        ))}
      </Cardul>
    </Carddiv>
  );
}

export default Card;
