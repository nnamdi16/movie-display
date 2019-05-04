import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMessage } from './actions';
import { bindActionCreators } from 'redux';
const Toggle = ({ messageVisibility, toggleMessage }) => (
	<div>
		{messageVisibility && <p>You will be seeing this if redux is toggled</p>}
		<button onClick={toggleMessage}>Toggle Me</button>
	</div>
);

const mapStateToProps = state => {
	return {
		messageVisibility: state.message.messageVisibility
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggleMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
