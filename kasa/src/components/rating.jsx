import "../App.sass";
import PropTypes from 'prop-types';

export default function Rating({elementNumber,rating}) {

    // s'assure que format est bien converti dans le type daont on a besoin
    // rating = parseInt(rating);

    // tableau qui contient les éléments <i>
   const stars = [];
   for(let i = 0; i < elementNumber; i++) {
    // si l'index est inférieur au rating (numéro présent dans le fichier JSON) on ajoute des icônes étoilées rouges
    if(i < rating){
        stars.push(<i key={i} className="ratingStars fas fa-star" style={{color: "#FF6060"}}></i>);
    }else {
        // sinon les étoiles ajoutées sont grisées
        stars.push(<i key={i} className="ratingStars fas fa-star" style={{color: "#E3E3E3"}}></i>);
    }    
   }

    return(
        // div qui contient le tableau stars et qui affiche les étoiles rouges et grisées
            <div className="ratingStars">
                {stars}
            </div>    
    );
    
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    elementNumber: PropTypes.number.isRequired,

};