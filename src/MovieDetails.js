import React, { Component } from 'react';
// import Movie from './Movies';
import axios from 'axios';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
class MovieDetails extends Component {
	state = {
		movie: {}
	};
	async componentDidMount() {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${this.props.match.params
					.id}?api_key=6274c1c8045c07d02c232749ff8562ba&language=en-US`
			);
			const movie = response.data;
			this.setState({
				movie
			});
			// console.log(response.data.results);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { movie } = this.state;
		console.log(this.state.movies);
		return (
			<div className="App">
				<img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="{movie.title}" />
				<img src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
				<h1>{movie.title}</h1>
				<h3>{movie.release_date}</h3>
				<p>{movie.overview}</p>
			</div>
		);
	}
}

export default MovieDetails;
