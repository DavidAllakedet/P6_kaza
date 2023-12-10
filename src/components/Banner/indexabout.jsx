
import styled from 'styled-components'
import background from "../../assets/BannerBg2.png";

const BannerDiv = styled.div`
display:flex;
flex-direction: row;
width:1220px;
height:250px;

background-color:#f6f6f6;
border-radius: 30px;
color:white;
text-align: center;
align-items:center;
justify-content:center;
margin: auto;
  
  
  overflow: hidden;
  &:before {
    content: '';
    
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    
    background-position: right;
    background-repeat: no-repeat;
    background-size: auto;
   
    filter: brightness(0.75);
  }
    
`;
// const BannerTitle = styled.h1`
// color: white;
// text-align: center;`

function Banner(props) {
  return (

    <BannerDiv  style={{ backgroundImage: `url(${background})` }}>
      
    </BannerDiv>


    // <B style={{
    //   backgroundImage: `url(../assets/${props.ImageName})`
      
    // }}>
      
    // </>
  )
}
export default Banner
