import { useRouteError } from "react-router-dom";
import{Link} from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"


export default function ErrorPage() {
  // utilisation d'un hook pour récupérer toute erreur 
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <Header/>
        </div>
      <div className="errorContent">
        <h1 className="errorTilte">404</h1>
        <p className="errorText">{"Oups! La page que vous demandez n'existe pas."}</p>
        {/* redirection vers la page d'acceuil */}
        <Link className="text" to="/">{"Retourner sur la page d'accueil"}</Link>
      </div>
      <div>
            <Footer/>
        </div>
    </div>
  );
}