import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import RubberBand from 'react-reveal/RubberBand';

const AboutCard = ({ time, img, alt, title, content }) => {
	return (
		<RubberBand style={{ display: 'inline-block' }}>
			<div style={{ padding: '0', display: 'inline-block' }}>
				<div className='aboutNoExtraSpace'>
					<div className='aboutCardView'>
						<ScrollAnimation delay={time} animateIn='tada' initiallyVisible={true}>
							<img className='aboutCardImages' src={img} alt={alt} />
						</ScrollAnimation>
						<h2>{title}</h2>
						<p className='aboutCardTextView'>{content}</p>
					</div>
				</div>
			</div>
		</RubberBand>
	);
};

export default AboutCard;
