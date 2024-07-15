import "../App.sass";
import PropTypes from 'prop-types';

// le contenu des props est défini dans les page home et about
export default function Banner({alt, classe, text}) {
  return(
    <>
      <div className="bannerDiv">
        <div className={classe} alt={alt}>
        </div>
        <div> 
          {/* texte de la bannière répété deux fois car superposé pour avoir le rendu de la maquette */}
          <div className="textBanner">{text}</div>
          <div className="textBannerBis">{text}</div>

          
          {/* texte pour la version mobile pour un rendu comme sur la maquette */}
          <div className="textBanner mobile">
            {text ? text.split(',').map((item, index) =>
              <div className="textBannerPart" key={item}> {item}{index == 0 ? "," : ""} </div>
            ) : ''}
          </div>

          <div className="textBannerBis mobile">
            {text ? text.split(',').map((item, index) =>
              <div className="textBannerPart" key={item}> {item}{index == 0 ? "," : ""} </div>
            ) : ''}
          </div>
        </div>
      </div>
    </>
  )    
}

// on définit le type de données des props (propriétées) passés dans le composant. Le text n'est pas requis 
// car ne figure par dans la bannière de la page about
Banner.propTypes = {
  alt: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  text: PropTypes.string,
};