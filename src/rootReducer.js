import { combineReducers } from 'redux';

import message from './toggle/reducer';
import movies from './movies/reducer';

const rootReducer = combineReducers({
	message,
	movies
});

export default rootReducer;
