import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// export default class Movie extends Component {
// 	static propTypes = {
// 		movie: PropTypes.shape({
// 			title: PropTypes.string.isRequired
// 		}),
// 		desc: PropTypes.string.isRequired
// 	};

// 	static defaultProps = {
// 		desc: 'Description not available'
// 	};
// 	//We can't set default props on a nested property
// 	render() {
// 		return (
// 			<div>
// 				<h3>{this.props.movie.title}</h3>
// 				<p>{this.props.desc}</p>
// 			</div>
// 		);
// 	}
// }

/**
 * Using a functional stateless, presentational  component 
 * You don't use the this key word in functional component
 */

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const Movie = ({ movie }) => (
	<div>
		<h3>{movie.title}</h3>
		<Link to={`${movie.id}`}>
			<img src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
		</Link>
		<p>{movie.overview}</p>
	</div>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired,
	overview: PropTypes.string.isRequired
};

export default Movie;
//npm install --save-dev eslint eslint- config-airbnb eslint-plugin-react
