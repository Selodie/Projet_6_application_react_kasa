import { useRouteError } from "react-router-dom";
import{Link} from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"


export default function ErrorPage() {
  // utilisation d'un hook pour récupérer toute erreur 
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page">
        <div className="header">
          <Header/>
        </div>
        <div className="errorContent">
          <div className="errorTitle">
            <h1>404</h1>
          </div>
          <div className="errorText">
            {"Oups! La page que vous demandez n'existe pas."}
          </div>
          {/* redirection vers la page d'acceuil */}
          <div className="errorRedirect">
            <Link className="text" to="/">
              {"Retourner sur la page d'accueil"}
            </Link>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}