import Card from '../../components/Card/Card'
import styled from 'styled-components'
import Banner from '../../components/Banner/Banner'

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
const CardConst = styled.div`
display:flex;
flex-direction: column;
jsutify-content: center;
align-items:center
`
const data = [
  {
    name: ['Titre de la', <br/>,
     'location']
  },
  {
    name: ['Titre de la', <br/>,
     'location']
  },
  {
    name: ['Titre de la', <br/>,
    'location']
  },
  {
    name: ['Titre de la', <br/>,
     'location']
   
  },
  {
    name: ['Titre de la', <br/>,
     'location']
    
  },
  {
    name: ['Titre de la', <br/>,
    'location']
    
  },
  
]

function Home() {
  return (
    <CardConst>
      <Banner page="Home" />
      <CardsContainer>
        {data.map((location, index) => (
          
          <Card
            key={`${location.name}-${index}`}
            title={location.name}
          />
        ))}
      </CardsContainer>
    </CardConst>
  )
}

export default Home