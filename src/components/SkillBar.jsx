import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SkillBar = ({ logo, lang, perc }) => {
	return (
		<ScrollAnimation animateIn='bounceInRight' animateOut='fadeOut' delay={200} duration={2} className='outer'>
			<div
				style={{
					width: '75%',
					height: '25px',
					margin: '20px 0px',
					borderRadius: '5px',
					border: '1px solid rgb(138, 137, 137)',
					boxShadow: '5px 10px 5px rgb(138, 137, 137)',
					backgroundColor: '#E5ECF4',
				}}
			>
				<img style={{ position: 'absolute', width: '25px', marginLeft: '-40px' }} src={logo} alt='' />
				<div
					style={{
						width: perc,
						height: '25px',
						backgroundColor: '#FFBA08',
						borderRadius: '5px',
						position: 'relative',
					}}
				>
					<div
						style={{
							padding: '3px',
							height: '19px',
							width: '95px',
							backgroundColor: 'rgb(27,35,46)',
							borderRadius: '5px 0px 0px 5px',
						}}
					>
						<p>{lang}</p>
					</div>
					<p
						style={{
							top: '0',
							left: '90%',
							padding: '3px',
							position: 'absolute',
						}}
					>
						{perc}
					</p>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default SkillBar;
