import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DivErr = styled.div`
  display: flex;
  flex-direction:column;
  width: 1440px;
  padding: 80px 0;
  flex-direction: column;
  align-items: center;
  jsutify-content:center;
  color: #FF6060;
  gap: 100px;
  
  @media screen and (max-width: 600px) {
    width: 335px;
    padding-top: 0;
   
  }
`;

const Div404 = styled.div`
  justify-content: center;
  align-items:center;
  text-align: center;
  font-family: Montserrat;
  font-size: 300px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 150px;
    font-weight: 700;
    padding:0;
    margin:0;
    margin:0;
  }
`;

const Divh1 = styled.h1`
  color: #FF6060;
  font-family: Montserrat;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    padding:0;
    margin:0;
  }
`;

const RetourLink = styled(Link)`
  color: #FF6060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-decoration-line: underline;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;


const HeaderFooterdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:80px;

  @media screen and (max-width: 600px){
    
  height:auto;
   
`;


function Error() {
  return (
    <HeaderFooterdiv>
    <Header/>
    <DivErr>
      <Div404>404</Div404>
      <Divh1>Oups! La page que vous demandez n'existe pas.</Divh1>
      <RetourLink to={"/"}>
        Retourner sur la page d’accueil
      </RetourLink>
    </DivErr>
    <Footer />
    </HeaderFooterdiv>
    
  );
}

export default Error;
