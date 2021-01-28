import React from "react";
import Particles from "react-particles-js";
import Button from "../components/Button/Button";
import ScrollAnimation from "react-animate-on-scroll";

function Welcome() {
	return (
		<div id="WelcomeContainer">
			<ScrollAnimation
				animateIn="fadeIn"
				animateOut="fadeOut"
				delay={700}
				duration={4}
			>
				<h1 className="welcome">Welcome!</h1>
				<h1 className="name">I'm Joey Caruana</h1>
			</ScrollAnimation>
			<a className="link" href="#about">
				<span>
					<Button
						link="#about"
						title="Click Here!"
						left="0px"
						margin="0 5px"
						padding="10px"
					/>{" "}
				</span>{" "}
				<span className="text"> to learn more about me</span>
			</a>
			<div className="bg">
				<Particles
					params={{
						particles: {
							number: {
								value: 500,
								density: {
									enable: false,
								},
							},
							size: {
								value: 1,
								random: true,
								anim: {
									speed: 5,
									size_min: 0.3,
								},
							},
							line_linked: {
								enable: false,
							},
							move: {
								random: true,
								speed: 1,
								direction: "bottom",
								out_mode: "out",
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "bubble",
								},
								onclick: {
									enable: true,
									mode: "repulse",
								},
							},
							modes: {
								bubble: {
									distance: 250,
									duration: 2,
									size: 0,
									opacity: 0,
								},
								repulse: {
									distance: 400,
									duration: 4,
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

export default Welcome;
