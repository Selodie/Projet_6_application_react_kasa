import "../App.sass";
import PropTypes from 'prop-types';

export default function Tag({ tags }) {
    return(
        <div>
            {tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
            ))}
            
        </div>
    );
}

Tag.propTypes = {
    tags: PropTypes.array.isRequired,
};