import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slider from 'react-slick';

const Card = ({ link, title, images, description, icons }) => {
	const settings = {
		infinite: true,
		lazyLoad: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		dots: true,
	};

	return (
		<a href={link} target='blank'>
			<div className='card'>
				<h2>{title}</h2>
				<Zoom>
					<Slider {...settings}>
						{images.map((item, index) => (
							<div className='imgstyle'>
								<img className='projimg' key={index} src={item} alt='' />
							</div>
						))}
					</Slider>
				</Zoom>
				<p>{description}</p>
				{
					<div className='iconsContainer'>
						{icons.map((item, index) => (
							<img className='iconflip' key={index} src={item} alt='' />
						))}
					</div>
				}
				<a className='btn2' href={link} target='blank'>
					Check it out!
				</a>
			</div>
		</a>
	);
};

export default Card;
