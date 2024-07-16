import "../App.sass";
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function Slideshow({ slides }) {

  // On met la valeur initiale à 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // On met à jour currentIndex pour passer à la slide suivante
  const goToNextSlide = () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  setCurrentIndex(nextIndex);
  };

  // On met à jour pour passer à la slide précédente
  const goToPreviousSlide = () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  setCurrentIndex(prevIndex);
    };
  // la navigation  des slides se fait si elles sont supérieur à 1 slide
  const showNavigation = slides.length > 1;

  return (
    <div className="slideshow-container">
          
      {/* si showNavigation (le nombre d'images sup à 1) est true, on affiche ce qui suis */}
      {showNavigation && (
        <>
          {/* numérotation des images du carrousel. On débute la numérotation à 1  */}
          <div className="slideshowIndicators">
              {/* numéroation de la slide actuelle */}
              {currentIndex + 1} / {slides.length}
            </div>
            {/* bouton pour revenir à la slide précédente */}
            <span className="arrowLeftSlideshow" onClick={goToPreviousSlide}><img src="/assets/VectorLeft.png"></img></span>
            <span className="arrowLeftSlideshowMobile" onClick={goToPreviousSlide}><img src="/assets/arrowLeftMobile.png"></img></span>
        </>
        )}
        {/* on utlise la méthode map() sur le props slides dont le tableau est définit dans la page housingPage */}
        {slides.map((slide,index) => (
        <div
          // la clé unique est basé sur l'index du tableau
          key={index}
          // si l'index correspond à currentIndex, la classe active est ajoutée sur l'image affichée/sélectionnée
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          // on définit l'url de l'image sur le background image
          style={{ backgroundImage: `url(${slide})` }}
        />
        ))}
        {/* affichage du bouton pour aller à la slide suivante si nécessaire */}
        {showNavigation && (
          <div>
            {/* <span className="arrowRightSlideshow" onClick={goToNextSlide}><img src="/assets/Vector.png"></img></span> */}
              <img src="/assets/Vector.png" className="arrowRightSlideshow" onClick={goToNextSlide}></img>
              <img src="/assets/arrowRightMobile.png" className="arrowRightSlideshowMobile" onClick={goToNextSlide}></img>
          </div>
        )}
    </div>
  );
}
// on spécifie que le composant attend un tableau slides comme prop et qu'il est requis
  Slideshow.propTypes = {
    slides: PropTypes.array.isRequired,
  };
