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

    // utilisation d'un hook pour récupérer l'id du logement depuis l'URL
   const {id} = useParams(); 
    // recherche du logement correspondant à l'id dans les données importées
   const result = Data.find( function(item) {
    // trouve l'objet dont l'id correspond à celui passé en paramètre
   return item.id === id;
   })

    // si l'id dans l'url n'est pas le bon -> redirection vers la page d'erreur
   if(!result){
    return <ErrorPage/>
   }

    // pour générer une clé unique et alétoire en utilisant un préfixe et une date
    const generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
  }

  // on sépare le nom de l'hôte en deux mots
  const name = result.host.name.split(' ')

  return (
    <>
      <div className="header">
        <Header/>
      </div> 

      <main className="main">
        {/* affichage du carousel avec les images du logement, la clé unique correspond à l'id du logement */}
        <Slideshow key={result.id} slides={result.pictures}/>
        
        <div className="contentHousing">
          {/* Bloc complet */}
          <div className="introHousing">
            {/* Bloc de gauche */}
            <div>
              {/* titre du logement */}
              <h1 className="titleHousingPage">{result.title}</h1>
              {/* localisation du logement */}
              <p className="location">{result.location}</p>
              {/* affichage de stags du logement */}
              <Tag key={result.id} tags={result.tags}/>
            </div>

            {/* Bloc de droite */}
            <div className="rightBloc">
              <div className="host">
                <div>
                  {/* prénom de l'hôte */}
                  <p className="hostName">{name[0]}</p>
                  {/* nom de famille de l'hôte */}
                  <p className="hostName">{name[1]}</p>
                </div>
                {/* photo de l'hôte */}
                <img className="profilPicture" src={result.host.picture} alt={result.host.name}></img>
              </div>
              <div className="rating">
                {/* affichage de la notation du logement, cette note est convertie en entier. 
                On génère une clé unique en utilisant comme préfixe le mot rating, on définit le nombre d'étoiles qui doit être affichées */}
                <Rating rating={parseInt(result.rating)} key={generateKey("rating")} elementNumber={5}/>
              </div>
            </div>
          </div>

          <div className="collapseHousing">
            <div className="collapseHousingContent">
              {/* descritpion du logement */}
              <Collapse title="Description" text={result.description}/>
            </div>
            <div className="collapseHousingContent">
              {/* équipements du logement */}
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