import React from 'react';
import './styles.css/Footer.css';

const Footer = ({ legend }) => {
	return (
		<div className='Footer__container'>
			<p className='Footer__legend'>{legend}</p>
		</div>
	);
};

export default Footer;