import React, { Fragment } from 'react';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';

function App() {
	return (
		<Fragment>
			<Header title='Mancilla' />
			<Home />
		</Fragment>
	);
}

export default App;
