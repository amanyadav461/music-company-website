import React from "react";
import "./Button.css";

function RedBtn(props) {
	return (
		<div>
			<button className="RedBtn">{props.btntext}</button>
		</div>
	);
}
function RedBtnSmall(props) {
	return (
		<div>
			<button className="RedBtnSmall">{props.btntext}</button>
		</div>
	);
}

function GreyBtn(props) {
	return (
		<div>
			<button className="GreyBtn">{props.btntext}</button>
		</div>
	);
}

function GreenBtn(props) {
	return (
		<div>
			<button className="GreenBtn">{props.btntext}</button>
		</div>
	);
}

function ReadMore() {
	return (
		<div>
			<button className="ReadMore">
				ReadMore <i class="fas fa-angle-double-right"></i>
			</button>
		</div>
	);
}

export { RedBtn, RedBtnSmall, GreyBtn, GreenBtn, ReadMore };
