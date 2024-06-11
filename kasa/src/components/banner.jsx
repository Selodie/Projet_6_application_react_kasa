import "../App.sass";
import PropTypes from 'prop-types';

export default function Banner({alt, classe, text}) {
   
        return(
            <>
                <div className="bannerDiv">
                    <div className={classe} alt={alt}>
                    </div>
                    <div> 
                        <div className="textBanner">{text}</div>
                        <div className="textBannerBis">{text}</div>
                    </div>
                </div>
            </>
       )    
}

// on définit le type de données des props (propriétées) passés dans le composant
Banner.propTypes = {
    alt: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired,
    text: PropTypes.string,
  };