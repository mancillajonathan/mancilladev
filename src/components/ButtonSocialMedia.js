import React from 'react';
import './styles/ButtonSocialMedia.css';

const ButtonSocialMedia = ({ social }) => {
	return (
		<div className='ButtonSocialMedia__div animate__animated animate__fadeInUp'>
			{social.map((link) => (
				<div className='ButtonSocialMedia__container' key={link.key}>
					<a href={link.link} target='_blank' rel='noopener noreferrer'>
						<i className={link.iconURL}></i>
					</a>
				</div>
			))}
		</div>
	);
};

export default ButtonSocialMedia;
