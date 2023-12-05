
import styled from 'styled-components'

const BannerDiv = styled.div`
display:flex;
flex-direction: row;
width:1220px;
height:250px;
background-image: url('../assets/BannerBg.png');
background-color:#f6f6f6;
border-radius: 30px;

text-align: center;
align-items:center;
justify-content:center;
    
`;
const BannerTitle = styled.h1`
color: white;
text-align: center;`

function Banner(props) {
  return (
    <BannerDiv  style={{
      backgroundImage: `url(../../assets/${props.ImageName})`
      
    }}>
      <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
    </BannerDiv>
  )
}
export default Banner
