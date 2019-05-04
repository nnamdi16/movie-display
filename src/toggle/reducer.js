import { TOGGLE_MESSAGE } from '../toggle/actions';

const initialState = {
	messageVisibility: false
};

export default (state = initialState, action) => {
	const { type, data } = action;
	switch (type) {
		case TOGGLE_MESSAGE:
			return {
				...state,
				messageVisibility: !state.messageVisibility
			};
		default:
			return state;
	}
};
