import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from '../movies/Movies';
import styled from 'styled-components';
import { getMovies } from './actions';

class MovieList extends PureComponent {
	componentDidMount() {
		const { getMovies, isLoaded, moviesLoadedAt } = this.props;
		const oneHour = 60 * 60 * 1000;
		!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour ? getMovies() : null;
	}

	render() {
		// console.log(this.state.movies);
		const { movies } = this.props;
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
		isLoaded: state.movies.moviesLoaded,
		moviesLoadedAt: state.movies.moviesLoadedAt
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
