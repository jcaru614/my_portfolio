import React from 'react';
import { Breakpoint } from 'react-socks';
import ScrollAnimation from 'react-animate-on-scroll';
import RubberBand from 'react-reveal/RubberBand';

const AboutCard = ({ time, img, alt, title, content }) => {
	return (
		<RubberBand style={{ display: 'inline-block' }}>
			<div style={noExtraSpace.smallerView}>
				<Breakpoint customQuery='(min-width: 621px)' style={noExtraSpace.generalView}>
					<div style={styles.generalView}>
						<ScrollAnimation delay={time} animateIn='tada' initiallyVisible={true}>
							<img style={images} src={img} alt={alt} />
						</ScrollAnimation>
						<h2>{title}</h2>
						<p style={text.generalView}>{content}</p>
					</div>
				</Breakpoint>
				<Breakpoint customQuery='(max-width: 620px)' style={noExtraSpace.smallerView}>
					<div style={styles.smallerView}>
						<img style={images} src={img} alt={alt} />
						<h2>{title}</h2>
						<p style={text.smallerView}>{content}</p>
					</div>
				</Breakpoint>
			</div>
		</RubberBand>
	);
};

const styles = {
	generalView: {
		display: 'inline-block',
		padding: '15px 5px',
		marginRight: '20px',
		marginLeft: '20px',
		width: '230px',
		height: '330px',
		backgroundColor: 'rgb(27,35,46)',
		borderRadius: '40px 10px 40px 10px',
		verticalAlign: 'top',
		textAlign: 'center',
		zIndex: '-1',
		boxShadow: '20px 30px 20px rgb(138, 137, 137)',
	},
	smallerView: {
		display: 'inline-block',
		padding: '20px 2px 0',
		margin: '15px',
		width: '200px',
		height: '310px',
		backgroundColor: 'rgb(27,35,46)',
		borderRadius: '5px 40px 5px 40px',
		verticalAlign: 'top',
		textAlign: 'center',
		zIndex: '-1',
	},
};
const text = {
	generalView: {
		fontSize: '20px',
		padding: '5px',
		color: 'white',
	},
	smallerView: {
		fontSize: '16px',
		padding: '5px',
		color: 'white',
	},
};

const images = {
	padding: '5px',
	borderRadius: '10%',
	backgroundColor: '#E5ECF4',
	height: '80px',
	marginBottom: '10px',
	zIndex: '-1',
};
const noExtraSpace = {
	generalView: {
		padding: '0',
		margin: '60px 5px 0',
		display: 'inline-block',
	},
	smallerView: {
		padding: '0',
		display: 'inline-block',
	},
};

export default AboutCard;
