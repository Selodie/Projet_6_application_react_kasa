import "../App.sass";
import PropTypes from 'prop-types';

export default function Tag({ tags }) {
    return(
        <div className="tagContener">
            {/* utilisation de la méthode map() pour parcourir les éléments du tableau tags.
            On renvoie ensuite chaque élément dans un span. Chaque élément à pour clé unique un index*/}
            {tags.map((tag, index) => (
                // <span className="tag" key={index}>{tag}</span>
                <div className="tag" key={index}>{tag}</div>
            ))}
            
        </div>
    );
}

Tag.propTypes = {
    tags: PropTypes.array.isRequired,
};