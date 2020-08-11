import React, { Fragment } from 'react';
import './styles/Home.css';
import data from '../data.json';

const { home } = data;

function Home() {
	return (
		<Fragment>
			<div className='container'>
				<h1 className='App__secondary-title'>{home.subtitle}</h1>
				<h1 className='App__main-title'>{home.mainTitle}</h1>
			</div>
		</Fragment>
	);
}

export default Home;
