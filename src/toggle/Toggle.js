import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
	<div>
		{messageVisibility && <p>You will be seeing this if redux is toggled</p>}
		<button onClick={toggleMessage}>Toggle Me</button>
		{/* <button onClick={getMovies}>Load Movies</button> */}
	</div>
);

const mapStateToProps = state => {
	return {
		messageVisibility: state.toggle.messageVisibility
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggleMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
