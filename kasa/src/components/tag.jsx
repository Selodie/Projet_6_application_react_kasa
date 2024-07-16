import "../App.sass";
import PropTypes from 'prop-types';

export default function Tag({ tags }) {
  return(
    <div className="tagContener">
      {/* itération sur chaque tag dans le tableau tags */}
      {tags.map((tag, index) => (
        // pour chaque tag on retourne une div avec une clé unique (on utilise l'index pour la définir)
        // et un tag
        <div className="tag" key={index}>{tag}</div>
      ))}
        
    </div>
  );
}
// on spécifie que le composant attend un tableau tags qui est requis
Tag.propTypes = {
  tags: PropTypes.array.isRequired,
};