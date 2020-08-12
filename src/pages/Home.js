import React, { Fragment } from 'react';
import './styles/Home.css';
import data from '../data.json';

const { home } = data;

function Home() {
	return (
		<div className='container'>
			<h1 className='App__secondary-title animate__animated animate__fadeInUp'>
				{home.subtitle}
			</h1>
			<h1 className='App__main-title animate__animated animate__fadeInUp'>
				{home.mainTitle}
			</h1>
		</div>
	);
}

export default Home;
