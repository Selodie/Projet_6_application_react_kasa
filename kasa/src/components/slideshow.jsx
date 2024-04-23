import "../App.sass";
import PropTypes from 'prop-types';
import { useState } from 'react';
// import Data from "../housingRental.json"


export default function Slideshow({ slides }) {

        const [currentIndex, setCurrentIndex] = useState(0);
    
        const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
        };

        const goToPreviousSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(prevIndex);
          };
    
        return (
        <div className="slideshow-container">

            <span className="arrowLeftSlideshow" onClick={goToPreviousSlide}><i className="fas fa-chevron-left" style={{color: "#FFFFFF"}}></i></span>

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
            
            <span className="arrowRightSlideshow" onClick={goToNextSlide}><i className="fas fa-chevron-right" style={{color: "#FFFFFF"}}></i></span>
        </div>
        );
    }


    Slideshow.propTypes = {
        slides: PropTypes.array.isRequired,
        
    };
