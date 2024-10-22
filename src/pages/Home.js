import React from 'react';
import './styles/Home.css';
import ButtonSocialMedia from '../components/ButtonSocialMedia';
import data from '../data.json';

const { home, social } = data;

function Home() {
	return (
		<div className='container'>
			<h1 className='App__secondary-title animate__animated animate__fadeInUp'>
				{home.subtitle}
			</h1>
			<h1 className='App__main-title animate__animated animate__fadeInUp'>
				{home.mainTitle}
			</h1>
			<ButtonSocialMedia social={social} />
		</div>
	);
}

export default Home;
