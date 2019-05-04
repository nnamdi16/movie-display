import { GET_MOVIES } from '../movies/actions';

const initialState = {
	movies: [],
	moviesLoaded: false
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

		default:
			return state;
	}
};
