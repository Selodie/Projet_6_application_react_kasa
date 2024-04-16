import { useRouteError } from "react-router-dom";
import{Link} from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
            <Header/>
        </div>
      <div className="errorContent">
        <h1 className="errorTilte">404</h1>
        <p className="errorText">Oups! La page que vous demandez n existe pas.</p>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
        <Link className="linkHome" to="/">{"Retourner sur la page d'accueil"}</Link>
      </div>
      <div>
            <Footer/>
        </div>
    </div>
  );
}