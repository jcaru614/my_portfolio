import React from "react";
import "./button.styles.css";

const Button = (props) => {
	const btn = {
		margin: props.margin,
		padding: props.padding,
		borderRadius: "10px",
		border: "3px solid #FFBA08",
		position: props.position,
		bottom: "20px",
		left: props.left,
		textDecoration: "none",
	};

	return (
		<a className="btn" style={btn} href={props.link}>
			{props.title}
		</a>
	);
};

export default Button;
