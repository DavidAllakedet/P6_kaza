import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// // const CardsContainer = styled.div`
// //   display: grid;
// //   gap: 60px;
// //   grid-template-rows: 300px 300px;
// //   grid-template-columns: repeat(3, 1fr);
// //   align-items: center;
// //   justify-items: center;
// //   background-color: #f6f6f6;
// //   padding: 60px;
// //   margin-bottom: 50px;
// //   border-radius: 30px;
// //   font-family: Montserrat;

//   @media screen and (max-width: 600px){
//     display: flex;
//     flex-direction:column;
//     width:335px;
//     gap: 20px;
//     padding: 0;
//     align-items: center;
//     justify-items: center;

// `;

const CardConst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 600px){
    gap:20px;
`;

const HeaderFooterdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const data = [
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
//   {
//     name: ['Titre de la', <br key="line-break" />, 'location'],
//   },
// ];

function Home() {
  return (
    <HeaderFooterdiv>
      <Header />
      <CardConst>
        <Banner page="Home" />
        <Card />
        
      </CardConst>
      <Footer />
    </HeaderFooterdiv>
  );
}

export default Home;
