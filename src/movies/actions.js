import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';

export function getMovies() {
	return async function(dispatch) {
		const response = await axios.get(
			'https://api.themoviedb.org/3/discover/movie?api_key=6274c1c8045c07d02c232749ff8562ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		);
		console.log(response);
		const movies = response.data;
		return dispatch({
			type: 'GET_MOVIES',
			data: movies.results
		});
	};
}
