import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Logement.scss'; 

function Etoiles({ LogementRating }) {
  

    const range = [1, 2, 3, 4, 5]
    return (
      <div className='Etoilesdiv'>
        {range.map((rangeElem) =>
          LogementRating >= rangeElem ? (
            <span key={rangeElem.toString()}>
              <FontAwesomeIcon icon={faStar} className="activestar" />
            </span>
          ) : (
            <span key={rangeElem.toString()}>
              <FontAwesomeIcon icon={faStar} className="innactivestar" />
            </span>
          ),
        )}
      </div>
    )
  }
  export default Etoiles


