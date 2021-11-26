import React from "react";
import "./Header.css";

export default function HeaderFeatures(props) {
	return (
		<div className="HeaderFeatureItem">
			<span className="HeaderFeatureIcon">{props.icon}</span>
			<span className="HeaderFeatureHeading">{props.heading}</span>
			<p className="HeaderFeatureText">{props.description}</p>
		</div>
	);
}
