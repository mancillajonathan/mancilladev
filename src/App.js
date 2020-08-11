import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import data from './data.json';

const { header, home, footer } = data;

function App() {
	return (
		<Fragment>
			<Header title={header.title} />
			<Home mainTitle={home.mainTitle} subtitle={home.subtitle} />
			<Footer legend={footer.legend} />
		</Fragment>
	);
}

export default App;
