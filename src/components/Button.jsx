import React from 'react';

const Button = ({ margin, padding, position, left, link, title }) => {
	const btn = {
		margin: margin,
		padding: padding,
		borderRadius: '10px',
		border: '3px solid #FFBA08',
		position: position,
		bottom: '20px',
		left: left,
		textDecoration: 'none',
	};

	return (
		<a className='btn' style={btn} href={link}>
			{title}
		</a>
	);
};

export default Button;
