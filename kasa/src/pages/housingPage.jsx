import Header from "../components/header"
import Footer from "../components/footer"
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
        <div>
            <Footer/>
        </div> 
        </>
    )
}