import React, { Component } from 'react';
import Movie from './Movies';
import axios from 'axios';
import styled from 'styled-components';

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
			<MovieGrid>
				{this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
				{/* {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} overview={movie.overview} />)} */}
			</MovieGrid>
		);
	}
}

export default MovieList;
const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
