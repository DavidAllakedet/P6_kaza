import React from 'react';
//import styled from 'styled-components';
import Cards from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../styles/Home.scss';

// const CardConst = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 50px;

//   @media screen and (max-width: 600px){
//     gap:20px;
// `;

// const HeaderFooterdiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

function Home() {
  return (
    <div className="HeaderFooterdiv">
      <Header />
      <div className="CardConst">
        <Banner page="Home" />
        <Cards />
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
