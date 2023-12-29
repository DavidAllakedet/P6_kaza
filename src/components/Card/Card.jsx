import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useData } from '../../pages/Utiles/Hooks/Hooks';

const Carddiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%; 
margin: 30px 0;
background-color: #f6f6f6;
border-radius: 25px;

@media screen and (max-width: 600px){
  background-color:white;
  width:340px;
  border-radius: 10px;
  
`;

const Cardul = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px auto;
  padding: 0;
  gap: 50px;

  @media screen and (max-width: 600px){
    width:100%;
    grid-template-columns: repeat(1, 1fr);
    margin:0;
`;

const CardToLogement = styled.div`
  width:340px;
  height: 340px;
  position: relative;
  box-sizing: border-box;
  align-items:center;
  justify-content:center;


`;

const Cardp = styled.div`
  display: inline;
   position: absolute;
   width: 120px;
   height: auto;
   bottom: 20px;
  left: 10px;
   color: white;
   z-index: 2;
   font-size: 18px;
   font-weight:500;
`;

const Cardimg = styled.img`
  position: absolute;
  width: 335px;
  height: 320px;
  z-index: 1;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(0.9);

  @media screen and (max-width: 600px){
    width:335px;
    height: 320px;
  
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
