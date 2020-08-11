import React from 'react';
import './styles.css/Header.css';
import Button from './ButtonCTA';
import data from '../data.json';

const { header } = data;

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
				<Button message={header.moreInfoButton[0].name} />
			</div>
		</div>
	);
};

export default Header;
