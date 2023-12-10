import React from "react"
import styled from "styled-components"




function Error() {

  const DivErr = styled.div`
  display:flex;
  color:#ff6060;
  flex-direction: column;
  jsutify-content: center;
  align-items:center
  `

  const Div404 = styled.div`
  font-size:400px;
  `
  const Divh1 = styled.h1`
  flex-direction: column;
  jsutify-content: center;
  align-items:center
  padding:60px 0;`

  // const a = styled.a`
  // color:#ff6060;
  // padding:60px 0;
  // `
    return (
      <DivErr>
        <Div404>404</Div404>
        <Divh1>Oups! La page que vous demandez n'existe pas.</Divh1>
        <a href="/">Retourner sur la page d’accueil</a>
      </DivErr>
      
    )
  }
  
  export default Error