import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return <li><img src={coverImg} alt={title} /><h2><Link to={`/movie/${id}`}>{title}</Link></h2><p>{summary}</p>
        <ul>{genres.map((g, index) => <li key={index}>{g}</li>)}</ul>
    </li>;
};

Movie.propTypes = {id:PropTypes.number.isRequired,
    coverImg: PropTypes.string, title: PropTypes.string.isRequired, summary: PropTypes.string, genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;