import React, { Component } from 'react';
import Movie from './Movies';
import axios from 'axios';

class MovieList extends Component {
	state = {
		movies: []
	};
	async componentDidMount() {
		try {
			const response = await axios.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=6274c1c8045c07d02c232749ff8562ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			this.setState({
				movies: response.data.results
			});
			console.log(response.data.results);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		console.log(this.state.movies);
		return (
			<div className="App">
				{this.state.movies.map(movie => <Movie key={movie.id} movie={movie} overview={movie.overview} />)}
			</div>
		);
	}
}

export default MovieList;
