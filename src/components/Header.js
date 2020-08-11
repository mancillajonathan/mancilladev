import React from 'react';
import './styles.css/Header.css';
import logoWhite from '../logo-white.svg';
import Button from './ButtonCTA';

const Header = ({ title }) => {
	return (
		<div className='Header__container'>
			
			<h4 className='Header__title'>
				{title}
				<span className='Header__title-span'>DEV</span>{' '}
			</h4>
			<div className='links'>
				<h4>About me</h4>
				<h4>Portfolio</h4>
				<h4>Resume</h4>
				<Button message='Contact Me' />
			</div>
		</div>
	);
};

export default Header;
