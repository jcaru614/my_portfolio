import React from "react";
import Zoom from "react-reveal/Zoom";
import Slider from "react-slick";
import "./projectCard.styles.css";

const Card = (props) => {
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
		<a href={props.link} target="blank">
			<div className="card">
				<h2>{props.title}</h2>
				<Zoom>
					<Slider {...settings}>
						{props.images.map((item, index) => (
							<div className="imgstyle">
								<img className="projimg" key={index} src={item} alt="" />
							</div>
						))}
					</Slider>
				</Zoom>
				<p>{props.description}</p>
				{
					<div className="iconsContainer">
						{props.icons.map((item, index) => (
							<img className="iconflip" key={index} src={item} alt="" />
						))}
					</div>
				}
				<a className="btn2" href={props.link} target="blank">
					Check it out!
				</a>
			</div>
		</a>
	);
};

export default Card;
