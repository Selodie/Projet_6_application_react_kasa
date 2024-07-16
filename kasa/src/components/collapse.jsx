import "../App.sass";
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Collapse({title, text}) {
    
  // contient le svg de la flèche du haut
  const arrowUp = <svg className="arrowUp" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z" fill="white"/></svg>;
  // contient le svg de la flèche du bas
  const arrowDown = <svg className="arrowDown" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/></svg>;

  // utilisation d'un hook pour gérer l'état d'ouverture/fermeture de la collapse
  const [open, setOpen] = useState(false)
  
  return(
    <>
      <div className="collapse">
        <div>
          {/* on affiche ke titre de la collapse */}
          <p className="titleCollapse">{title}</p>
        </div>
        <div>
          {/* Au clic sur cet élément on inverse l'état open. On utilise une opération ternaire pour
          afficher la flèche up ou down en fonction
          de l'ouverture ou de la fermeture du collapse */}
          <span onClick={ () => setOpen (!open)}> 
            {open === true ? arrowUp : arrowDown}
          </span>
        </div>
      </div>
      <div className="collapseBack">
        {/* on affiche le texte quand il est ouvert et si open est true. Texte définit dans la page about */}
        {open && <div className="textCollapse">{text}</div>}
      </div>
    </>
    )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  // on indique que text peut être une chaîne de caractère ou un tableau et qu'il est requis
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  };