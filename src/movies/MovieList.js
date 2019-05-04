import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from '../movies/Movies';
import styled from 'styled-components';
import { getMovies } from './actions';

class MovieList extends PureComponent {
	componentDidMount() {
		const { getMovies, isLoaded } = this.props;
		!isLoaded ? getMovies() : null;
	}

	render() {
		// console.log(this.state.movies);
		const { movies, isLoaded } = this.props;
		return (
			<MovieGrid>
				{movies.map(movie => <Movie key={movie.id} movie={movie} />)}
				{/* {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} overview={movie.overview} />)} */}
			</MovieGrid>
		);
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies.movies,
		isLoaded: state.movies.moviesLoaded
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
