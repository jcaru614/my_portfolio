import React from "react";
import footer from "../assets/images/footer3.jpeg";

function Footer() {
	const parent = {
		height: "280px",
		backgroundImage: `url(${footer})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};

	return <div className="thefooter" style={parent} />;
}

export default Footer;
