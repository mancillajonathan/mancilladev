import React from 'react';
import './styles/Footer.css';

const Footer = ({ footer }) => {
	return (
		<div className='Footer__container'>
			<p className='Footer__legend'>
				{footer.legend}{' '}
				<strong>
					<a href={footer.repository}>{footer.technology}</a>
				</strong>{' '}
			</p>
		</div>
	);
};

export default Footer;
