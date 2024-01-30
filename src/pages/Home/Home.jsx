import React from 'react';
//import styled from 'styled-components';
import Cards from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../styles/Home.scss';


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
