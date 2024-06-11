import "../App.sass";
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function Slideshow({ slides }) {

    // On met la veleur initiale à 0
    const [currentIndex, setCurrentIndex] = useState(0);

    // On met à jour currentIndex pour passer à la slide suivante
    const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
    };

    // idem mais met à jour pour passer à la slide précédente
    const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
        };

    const showNavigation = slides.length > 1;

    return (
    <div className="slideshow-container">
          
          {/* si showNavigation (le nombre d'images sup à 1) est true, on affiche ce qui suis */}
        {showNavigation && (
            <>
            {/* numérotation des images du carrousel. On débute la numérotation à 1  */}
                <div className="slideshowIndicators">
                    {currentIndex + 1} / {slides.length}
                 </div>
                <span className="arrowLeftSlideshow" onClick={goToPreviousSlide}><i className="fa fa-chevron-left" style={{color: "#FFFFFF"}}></i></span>
            </>
          )}
        {/* on utlise la méthode map() sur le props slides dont le tableau est définit dans la page housingPage */}
        {slides.map((slide,index) => (
        <div
        // la clé unique est basé sur l'index du tableau
            key={index}
            // si l'index correspond à currentIndex, la classe active est ajoutée sur l'image affichée/séléectionnée
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            // on définit l'url de l'image sur le background image
            style={{ backgroundImage: `url(${slide})` }}
        />
        ))}
        {showNavigation && (
            <span className="arrowRightSlideshow" onClick={goToNextSlide}><i className="fa fa-chevron-right" style={{color: "#FFFFFF"}}></i></span>
        )}
    </div>
    );
}

    Slideshow.propTypes = {
        slides: PropTypes.array.isRequired,
    };
