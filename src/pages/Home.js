import React, { Fragment } from 'react';
import './styles/Home.css';

function Home({ mainTitle, subtitle }) {
	return (
		<Fragment>
			<div className='container'>
				<h1 className='App__secondary-title'>{subtitle}</h1>
				<h1 className='App__main-title'>{mainTitle}</h1>
			</div>
		</Fragment>
	);
}

export default Home;
