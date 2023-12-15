import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import colors from '../../utils/colors'

const CardLabel = styled.span`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color: #5843e4;
    font-size: 22px;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    background-color: #FF6060 ;
    background: linear-gradient(#FF6060, #000000) 100%);
    border-radius: 10px;
    width: 300px;
    height:300px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
`;

function Card({ label, title, picture }) {
  return (

    <StyledLink to={'/room'}>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <span>{title}</span>
      </CardWrapper>
    </StyledLink>
  )
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: '',
  title: '',
}

export default Card