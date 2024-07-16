import "../App.sass";
import {Link} from "react-router-dom";

export default function Card(item) {
  return(
    // on définit le lien de chaque card en y ajoutant son id dans l'url
    <Link className="linkCard" to={`/housingPage/${item.id}`}>
      <div className="card">
        {/* on affiche l'image du logement */}
        <img className="cardImg" src={item.cover} alt={item.title}></img>
        {/* on affiche le titre du logement */}
        <p className="cardTitle">{item.title}</p>
      </div> 
    </Link>   
  )
}

