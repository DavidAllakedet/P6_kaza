
// import styled from 'styled-components';
// //import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// //import { useData } from '../../pages/Utiles/Hooks/Hooks';
// import data from '../../data/data.json';

// function Etoiles() {
//     const EtoilesDiv = styled.div`
//     display: flex;
//     font-size: 20px;
  
//     @media screen and (max-width: 600px) {
//       justify-content: center;
//       align-items: center;
//     }
//   `;
  
//   const Etoile = styled(FontAwesomeIcon)`
//     color: ${({ index, totalStars }) => (index < totalStars - 2 ? '#ff6060' : '#c4c4c4')};
//     margin-right: 10px;
  
//     @media screen and (max-width: 600px) {
//       font-size: 12px;
//       margin-right: 5px;
//     }
//   `;

//   const { id } = useParams();
//   const logementData = data;

//   const selectedRoom = logementData.find((items) => items.id === id);

// return(
//     <EtoilesDiv>
//     {[...Array(selectedRoom.rating || 0).keys()].map((index) => (
//       <Etoile key={index} index={index} totalStars={5} icon={faStar} />
//     ))}
//   </EtoilesDiv>
// );
// }

// export default Etoiles();