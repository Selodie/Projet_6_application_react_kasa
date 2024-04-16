import "../App.sass";
import PropTypes from 'prop-types';
// import cliff from '/assets/cliff.png'


export default function Banner({src, alt}) {
   
        return(
            <div className="banner">
                <img className="bannerBack" src={src} alt={alt}></img>
                {/* <img src={cliff}></img> */}
                {/* <p className="textBanner">Chez vous, partout et ailleurs</p> */}
            </div>
       ) 
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };