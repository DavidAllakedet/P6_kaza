// Importez le fichier SCSS
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import Banner from '../../components/Banner/Banner';
import "../../styles/Error.scss";
import '../../styles/Home.scss';

// ...

function Error() {
  return (
    <div className='HeaderFooterdiv'>
      <Header />
      <div className="DivErr"> {/* Utilisez la classe générée à partir du fichier SCSS */}
        <div className="Div404">404</div>
        <div className="Divh1">Oups! La page que vous demandez n'existe pas.</div>
        <Link to={"/"}>
         <p className='Retour'> Retourner sur la page d’accueil</p> 
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
