import React from "react";

export default function HeaderSliderItems(props) {
	return (
		<div className={"Header-slider-item"}>
			<h2>{props.heading}</h2>
			<p>{props.description}</p>
			<button className="header-slider-btn">{props.btntext}</button>
		</div>
	);
}
