import React from 'react';
import hardworking from '../assets/images/hardwork.png';
import efficient from '../assets/images/efficient.png';
import motivated from '../assets/images/motivated.png';
import learner from '../assets/images/learner.png';
import AboutCard from '../components/AboutCard';

const About = () => {
	return (
		<div id='about'>
			<h1>About</h1>
			<h2 className='abouth2'>
				I am a front end and mobile developer, with a passion for designing and developing applications with
				simplicity and functionality in mind in order to create functional and responsive apps for a great
				user experience. I devote myself every day to improving or learning something new.
			</h2>
			<AboutCard
				img={hardworking}
				time={800}
				title='Hardworking'
				content="I'm a hard worker and like to put in as much effort as possible to perfecting my projects."
			/>
			<AboutCard
				img={efficient}
				time={1200}
				title='Efficient'
				content='Finding the fastest and most precise way of completing a project or task with out compromising is my goal.'
			/>
			<AboutCard
				img={learner}
				time={1600}
				title='Learner'
				content='I enjoy learning new things and applying those concepts to what I am working on.'
			/>
			<AboutCard
				img={motivated}
				time={2000}
				title='Motivated'
				content='I am motivated to go above and beyond expectations. The bar is only the minimum.'
			/>
		</div>
	);
};

export default About;
