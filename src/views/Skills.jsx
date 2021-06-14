import React from 'react';
import SkillBar from '../components/SkillBar';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import typescript from '../assets/images/typescript.png';
import express from '../assets/images/express.png';
import react from '../assets/images/react.png';
import redux from '../assets/images/redux.png';
import reactNative from '../assets/images/reactNative.png';
import nodejs from '../assets/images/nodejs.png';
import figma from '../assets/images/figma.png';

const Skills = () => {
	return (
		<div id='skills-container'>
			<div className='skills'>
				<h1>Skills</h1>
				<SkillBar logo={react} lang='React' perc='85%' />
				<SkillBar logo={reactNative} lang='React Native' perc='85%' />
				<SkillBar logo={redux} lang='Redux' perc='80%' />
				<SkillBar logo={typescript} lang='Typescript' perc='75%' />
				<SkillBar logo={javascript} lang='Javascript' perc='85%' />
				<SkillBar logo={html} lang='HTML5' perc='75%' />
				<SkillBar logo={css} lang='CSS3' perc='75%' />
				<SkillBar logo={nodejs} lang='Node.js' perc='75%' />
				<SkillBar logo={express} lang='Express' perc='75%' />
				<SkillBar logo={figma} lang='Figma' perc='60%' />
			</div>
		</div>
	);
};

export default Skills;
