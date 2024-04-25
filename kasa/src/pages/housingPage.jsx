import Header from "../components/header"
import Footer from "../components/footer"
import Tag from "../components/tag"
import Rating from "../components/rating"
import Collapse from "../components/collapse"
import Slideshow from "../components/slideshow"
import Data from "../housingRental.json"
import {useParams} from "react-router-dom";


export default function Housing() {

    // predicat, fonction anonyme qui récupère le 1er élément === true. Ici on récupère l'id de la page correspondante
    //  (lorsque l'on clique sur une card). On utilise l'id en paramètre de l'url. C'est cet id le prédicat
   const {id} = useParams(); 
   const result = Data.find( function(item) {
   return item.id === id;
   })
//    console.log(result);
    return (
        <>
        <div>
            <Header/>
        </div> 
        <div>
            {/* on recupère le résultat pour récupérer le tableau de photos correspondantes à cet id. On définit la clé
            unique sur l'id de la fonction result et le slides sur le tableau pictures correspondant */}
            <Slideshow key={result.id} slides={result.pictures}/>
        </div> 
        <div className="introHousing">
            <h1 className="titleHousingPage">{result.title}</h1>
            <p>{result.host.name}</p>
            <img className="profilPicture" src={result.host.picture} alt={result.host.name}></img>
        </div>
        <div>
            <p className="text">{result.location}</p>
        </div>
        <div>
            <Tag key={result.id} tags={result.tags}/>
            <Rating/>
        </div>
        <div className="collapseHousing">
            <div className="collapseHousingContent">
                <Collapse title="Descritption" text={result.description}/>
            </div>
            <div className="collapseHousingContent">
                <Collapse title="Équipements" text={result.equipments}/>
            </div>
        </div> 
        <div>
            <Footer/>
        </div> 
        </>
    )
}