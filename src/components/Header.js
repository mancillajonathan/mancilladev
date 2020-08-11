import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import Button from './ButtonCTA';
import data from '../data.json';

const { header } = data;

const Header = () => {
	return (
		<div className='Header__container'>
			<Link to='/'>
				<h4 className='Header__title'>
					{header.title}
					<span className='Header__title-span'>DEV</span>{' '}
				</h4>
			</Link>
			<div className='links'>
				<Link to='/about-me'>
					<h4>About me</h4>
				</Link>
				<Link to='/portfolio'>
					<h4>Portfolio</h4>
				</Link>
				<Link to='/resume'>
					<h4>Resume</h4>
				</Link>
				<Button message={header.moreInfoButton[0].name} />
			</div>
		</div>
	);
};

export default Header;
