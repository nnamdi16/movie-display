import React, { Component } from 'react';
// import Movie from './Movies';
import axios from 'axios';
import styled from 'styled-components';
import { Poster } from './Movies';
import Overdrive from 'react-overdrive';

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
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
				<MovieInfo>
					<Overdrive id={movie.id}>
						<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
					</Overdrive>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MovieDetails;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;

	> div {
		margin-left: 20px;
	}

	img {
		position: relative;
		top: -5rem;
	}
`;
