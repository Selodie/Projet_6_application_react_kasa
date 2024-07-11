import "../App.sass";
import PropTypes from 'prop-types';

// elementNumber-> combien d'étoiles doivent être affichées au total, rating-> valeur de la notation à affiché
export default function Rating({elementNumber,rating}) {

    // création d'un tableau vide pour stocker les éléments <i> représentant les étoiles
   const stars = [];

//    boucle pour générer les étoiles
   for(let i = 0; i < elementNumber; i++) {
    // si l'index est inférieur au rating (numéro présent dans le fichier JSON) on ajoute des icônes étoilées rouges
    if(i < rating){
        // ajout d'une étoile rouge au tableau
        stars.push(<i key={i} className="ratingStars fas fa-star" style={{color: "#FF6060"}}></i>);
    }else {
        // sinon les étoiles ajoutées sont grisées
        stars.push(<i key={i} className="ratingStars fas fa-star" style={{color: "#E3E3E3"}}></i>);
    }    
   }

    return(
        // div qui contient le tableau stars et qui affiche les étoiles rouges et grises
            <div className="ratingStars">
                {stars}
            </div>    
    );
    
}
// on spécifie que le composa,t attend 2 props numériques et qu'il sont requis
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    elementNumber: PropTypes.number.isRequired,

};