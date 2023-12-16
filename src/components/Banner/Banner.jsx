import styled from 'styled-components';
import backgroundImageAbout from "../../assets/BannerBg2.png";
import backgroundImageHome from "../../assets/BannerBg.png";

const BannerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 1240px;
  height: 250px;
  background-color: #f6f6f6;
  border-radius: 25px;
  color: red;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover; 
    filter: brightness(0.75);
  }

  ${props => {
    //console.log('Page:', props.page);
    if (props.page === 'About') {
      return `
        &:before {
          background-image: url(${backgroundImageAbout});
        }
      `;
    } else if (props.page === 'Home') {
      return `
        &:before {
          background-image: url(${backgroundImageHome});
        }
      `;
    } else {
      return '';
    }
  }}
`;
const BannerTitle = styled.div`
  position: absolute;
  font-size: 50px;
  color: white;
  font-family:Montserrat;
`;

function Banner(props) {
  return (
    <BannerDiv page={props.page}>
      {props.page !== 'About' && <BannerTitle> Chez vous, partout et ailleurs</BannerTitle>}
    </BannerDiv>
  );
}

export default Banner;
