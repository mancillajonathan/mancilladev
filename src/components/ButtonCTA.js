import React from 'react';
import './styles/ButtonCTA.css';
import { Link } from 'react-router-dom';

const ButtonCTA = ({ message }) => {
	return (
		<button className='Header__button'>
			<Link to='/more-info'>{message}</Link>
		</button>
	);
};

export default ButtonCTA;
