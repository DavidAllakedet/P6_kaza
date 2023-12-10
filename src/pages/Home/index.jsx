import Card from '../../components/Card'
import styled from 'styled-components'
import Banner from '../../components/Banner/index'

const CardsContainer = styled.div`
display: grid;
gap: 60px;
grid-template-rows: 350px 350px;
grid-template-columns: repeat(3, 1fr);
align-items: center;
justify-items: center;
background-color: #f6f6f6;
padding: 50px;
margin-top: 20px;
border-radius: 30px;
`
const FreeLancesConst = styled.div`
display:flex;
flex-direction: column;
jsutify-content: center;
align-items:center
`



const freelanceProfiles = [
  {
    name: 'Titre de la location',
  },
  {
    name: 'Titre de la location',
  },
  {
    name: 'Titre de la location',
  },
  {
    name: 'Titre de la location',
   
  },
  {
    name: 'Titre de la location',
    
  },
  {
    name: 'Titre de la location',
    
  },
  
]

function Home() {
  return (
    <FreeLancesConst>
      <Banner backgroundImage="BannerBg.png" />
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreeLancesConst>
  )
}



export default Home