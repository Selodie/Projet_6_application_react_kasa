import "../App.sass";
import {Link} from "react-router-dom";
// import Data from "../housingRental.json"

export default function Card(item) {
        // console.log(item);
        return(
                <Link className="linkCard" to={`/housingPage/${item.id}`}>
                        <div className="card">
                                <img src={item.cover} alt={item.title}></img>
                                <p>{item.title}</p>
                        </div> 
               </Link>   
        )
}

