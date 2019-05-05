import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from '../movies/actions';

const initialState = {
	movies: [],
	movie: {},
	moviesLoaded: false,
	moviesLoadedAt: null,
	movieLoaded: false
};

export default (state = initialState, action) => {
	const { type, data } = action;
	switch (type) {
		case GET_MOVIES:
			return {
				...state,
				movies: data,
				moviesLoaded: true
			};
		case GET_MOVIE:
			return {
				...state,
				movie: data,
				movieLoaded: true,
				moviesLoadedAt: new Date()
			};
		case RESET_MOVIE:
			return {
				...state,
				movie: {},
				movieLoaded: false
			};

		default:
			return state;
	}
};
