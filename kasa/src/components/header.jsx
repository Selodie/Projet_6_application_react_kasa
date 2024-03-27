import { NavLink } from 'react-router-dom';
import "../App.sass";

export default function Header() {
        return (
            <header>
                <div>
                    <img src="./assets/logoKasaDesktop.png" alt="logo de Kasa, la premier a est représenté par une maison"></img>
                </div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li className="liHeader">
                            <NavLink to="/" className="navLink">Accueil</NavLink> 
                            </li>
                            <li className="liHeader">
                            <NavLink to="/about" className="navLink">A propos</NavLink> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
}

