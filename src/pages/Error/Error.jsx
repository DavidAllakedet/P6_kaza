import React from "react"
import { Link } from 'react-router-dom';
import styled from "styled-components"

function Error() {

  const DivErr = styled.div`
  display: flex;
  width: 1440px;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  
`
  const Div404 = styled.div`
  width: 597px;
  height: 263px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FF6060;
  text-align: center;
  font-family: Montserrat;
  font-size: 300px;
  font-style: normal;
  font-weight: 700;
  `
  const Divh1 = styled.h1`
  color: #FF6060;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
`
   const StyledLink = styled(Link)`
   color: #FF6060;
   font-family: Montserrat;
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 142.6%; /* 25.668px */
   text-decoration-line: underline;
   
  `
    return (
      <DivErr>
        <Div404>404</Div404>
        <Divh1>Oups! La page que vous demandez n'existe pas.</Divh1>
        <StyledLink to={"/" }>
        Retourner sur la page d’accueil
        </StyledLink> 
      </DivErr>
    )
  }
  
  export default Error