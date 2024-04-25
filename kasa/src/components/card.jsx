import "../App.sass";
import {Link} from "react-router-dom";

export default function Card(item) {
        // console.log(item);
        return(
                // on définit le lien de chaque card en y ajoutant son id dans l'url
                <Link className="linkCard" to={`/housingPage/${item.id}`}>
                        <div className="card">
                                <img src={item.cover} alt={item.title}></img>
                                <p className="cardTitle">{item.title}</p>
                        </div> 
               </Link>   
        )
}

