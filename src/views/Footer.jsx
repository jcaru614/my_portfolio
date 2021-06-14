import React from 'react';
import footer from '../assets/images/footer3.jpeg';

const Footer = () => {
	return <div className='thefooter' style={footerContainer} />;
};

const footerContainer = {
	height: '280px',
	backgroundImage: `url(${footer})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export default Footer;
