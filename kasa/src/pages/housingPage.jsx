import Header from "../components/header"
import Footer from "../components/footer"
import Tag from "../components/tag"
import Rating from "../components/rating"
import Collapse from "../components/collapse"
import Slideshow from "../components/slideshow"
import Data from "../housingRental.json"
import {useParams} from "react-router-dom";
import ErrorPage from "./error404";

export default function Housing() {
  // predicat, fonction anonyme qui récupère le 1er élément === true. Ici on récupère l'id de la page correspondante
  //  (lorsque l'on clique sur une card). On utilise l'id en paramètre de l'url. C'est cet id le prédicat
  const {id} = useParams(); 
  const result = Data.find( function(item) {
    return item.id === id;
  })

  // si l'id n'est pas le bon, redirection vers la page d'erreur
  if(!result){
    return <ErrorPage/>
  }

  // pour générer une clé unique et alétoire en uilisant un préfixe et un date
  new Date().getTime();
  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

const name = result.host.name.split(' ')

  return (
    <>
      <div className="header">
        <Header/>
      </div> 

      <main className="main">
        {/* on recupère le résultat pour récupérer le tableau de photos correspondantes à cet id. On définit la clé
        unique sur l'id de la fonction result et le slides sur le tableau pictures correspondant */}
        <Slideshow key={result.id} slides={result.pictures}/>
        
        <div className="contentHousing">
          {/* Bloc complet */}
          <div className="introHousing">
            {/* Bloc de gauche */}
            <div>
              <h1 className="titleHousingPage">{result.title}</h1>
              <p className="location">{result.location}</p>
              <Tag key={result.id} tags={result.tags}/>
            </div>

            {/* Bloc de droite */}
            <div className="rightBloc">
              <div className="host">
                <div>
                  <p className="hostName">{name[0]}</p>
                  <p className="hostName">{name[1]}</p>
                </div>
                <img className="profilPicture" src={result.host.picture} alt={result.host.name}></img>
              </div>
              <div className="rating">
                <Rating rating={parseInt(result.rating)} key={generateKey("rating")} elementNumber={5}/>
              </div>
            </div>
          </div>

          {/* <div className="tagRating"> */}
            {/* <Tag key={result.id} tags={result.tags}/> */}
            {/* elementNumber détermine le nombre total d'étoiles à afficher. On génère une clé aléatoire */}
            {/* <Rating rating={parseInt(result.rating)} key={generateKey("rating")} elementNumber={5}/> */}
          {/* </div> */}

          <div className="collapseHousing">
            <div className="collapseHousingContent">
              <Collapse title="Description" text={result.description}/>
            </div>
            <div className="collapseHousingContent">
              <Collapse title="Équipements" text={result.equipments.map((text, index) => (
                <div key={index}>{text}</div>
              ))}/>
            </div>
          </div> 
        </div>
      </main>

      <Footer/>
    </>
  )
}