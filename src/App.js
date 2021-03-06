import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import MovieList from './movies/MovieList';
import MovieDetails from './movies/MovieDetails';
// import axios from 'axios';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Toggle from './toggle/Toggle';

// import apiPlaceholder from './apiPlaceholder';

// const welcome = 'Welcome to React';

// const movies = [
// 	{
// 		id: 1,
// 		title: 'Star Wars',
// 		desc: 'A space movie'
// 	},
// 	{
// 		id: 2,
// 		title: 'Spider Man'
// 	},
// 	{
// 		id: 3,
// 		title: '24 Movies'
// 	}
// ];

// const hello = () => 'hello';
const middleware = [logger, thunk];
const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));
const App = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/">
						{/* MOVIEWORLD */}
						<img src={logo} className="App-logo" alt="logo" />
					</Link>
					{/* <Welcome text="Welcome to my World" /> */}
				</header>
				<Toggle />
				<Switch>
					<Route exact path="/" component={MovieList} />
					<Route path="/:id" component={MovieDetails} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

// const Test = ({ match }) => (
// 	<div>
// 		<h1>{match.params.id}</h1>
// 	</div>
// );

// class App extends Component {
// 	// state = {
// 	// 	movies: []
// 	// };
// 	// async componentDidMount() {
// 	// 	try {
// 	// 		// const res = await fetch(
// 	// 		// 	'https://api.themoviedb.org/3/discover/movie?api_key=6274c1c8045c07d02c232749ff8562ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
// 	// 		// );
// 	// 		// const movies = await res.json();
// 	// 		// console.log(movies);
// 	// 		const response = await axios.get(
// 	// 			'https://api.themoviedb.org/3/discover/movie?api_key=6274c1c8045c07d02c232749ff8562ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
// 	// 		);
// 	// 		this.setState({
// 	// 			movies: response.data.results
// 	// 		});
// 	// 		console.log(response.data.results);
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// }
// 	// state = {
// 	// 	input: 'HEllo'
// 	// };
// 	// submit = () => {
// 	// 	// console.log(this.text.value);
// 	// 	// console.log(this.email.value);
// 	// 	// console.log(this.number.value);
// 	// 	console.log(this.text.value);
// 	// };
// 	// updateInput = event => {
// 	// 	// console.log(event.target.value);
// 	// 	this.setState({
// 	// 		input: event.target.value.trim()
// 	// 	});
// 	// 	//this.setState
// 	// };
// 	render() {
// 		console.log(this.state.movies);
// 		return (
// 			<Router>
// 				<div className="App">
// 					<header className="App-header">
// 						<img src={logo} className="App-logo" alt="logo" />
// 						{/* <Welcome text="Welcome to my World" /> */}
// 					</header>
// 					<Switch>
// 						<Route path="/test" component={Test} />
// 						{/* {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} overview={movie.overview} />)} */}
// 					</Switch>

// 					{/* <p className="App-intro" ref={input => (this.text = input)}>
// 					To get started, edit <code>src/App.js</code> and save to reload.
// 				</p> */}
// 					{/* <p className="App-intro">
// 					To get started, edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<h2>{this.state.input}</h2>
// 				<input type="text" onChange={this.updateInput} value={this.state.input} />
// 				<input type="text" name="" id="" ref={input => (this.text = input)} />
// 				<button onClick={this.submit}>Show/Hide</button> */}
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	componentWillMount() {
// 		console.log('Will Mount');
// 	}

// 	componentDidMount() {
// 		console.log('Mounted');
// 	}

// 	state = {
// 		toggle: true
// 	};

// 	toggle = () => {
// 		this.setState({
// 			toggle: !this.state.toggle
// 		});
// 	};

// 	render() {
// 		console.log('I have rendered');
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<Welcome text="Welcome to my World" toggle={this.state.toggle} />
// 				</header>
// 				<p className="App-intro">
// 					To get started, edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				{this.state.toggle && <p>🍧🌰🥮</p>}
// 				<button onClick={this.toggle}>Show/Hide</button>
// 			</div>
// 		);
// 	}
// }

// class Welcome extends Component {
// 	render() {
// 		const { text } = this.props;
// 		return (
// 			<div>
// 				<h1 className="App-title">{text}</h1>
// 			</div>
// 		);
// const { text, toggle } = this.props;
// console.log(toggle);
// return <div>{toggle && <h1 className="App-title">{text}</h1>}</div>;

// return <div>{toggle ? <h1 className="App-title">{text}</h1> : null}</div>;
// 	}
// }

export default App;

//A prop is a property in a component and a basic way components talks to each other.
/**
 * Keeping track of the value of an input super useful in having dynamic components within your component
 * ComponentWillMount is fired before the component renders...since the constructor loads first, it is preferable to use constructor in place of ComponentWillMount
 * ComponentDidMount is fired after the component has rendered -Render
 * ComponentWillReceiveProps is invoked before a mounted component will receive props - Updating
 * ShouldComponentUpdate takes next props and next state and compares them with next  and present state and potentially decides whether we want to update the component control over whether the component will update.
 * ComponentWillUpdate invoked anytime a component is about update
 * ComponentDidUpdate invoked after an update or re-render occurs            
 * ComponentWillUnMount invoked before a component is removed or destroyed from a react hierarchy - Mounting
 * ComponentDidCatch for handling errors
 * Ref is used to access DOM elements - A reference to a DOM element - Taking a DOM element and assigning it to a property.
 * Style component way to style your application in a component based way
 * A pure component is basically one that only renders when a first level prop has been changed,it only renders when the state has changed or the props coming in has changed
 * Provider makes redux to b available in your application via connect
 * Connect grabs props value and dispatches action. It allows you to access your store from any given component.
 * mapStateToProps accepts state as an argument and returns an object, takes our state and map it to the props which gets passed into the component.
 * Dispatch is a function that accepts an object 
 * Mapping our togglemessage function to dispatch inside our connect statement like mapStateToProps 
 * bindActionCreators binds the reducer to dispatch signifying that we no longer need to call it with dispatch.
 * A thunk is a function that returns a function. It allows us to return a function from an action
*/
