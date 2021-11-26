import React from "react";

import { RedBtn, ReadMore, GreyBtn, GreenBtn } from "../Buttons/Button";
import { RedBtnSmall } from "../Buttons/Button";

function MainWideCard1(props) {
	return (
		<div className="MainWideCardContainer">
			<img src={props.image} alt="" />
			<h2 className="MainWide-h2">{props.venue}</h2>
			<div className="main-grey-i-container">
				<span className="main-grey-i">
					<i class="fas fa-map-marker-alt"></i>
					{props.location}
				</span>
				&nbsp;&nbsp;
				<span className="main-grey-i">
					<i class="far fa-clock"></i> {props.time}
				</span>
			</div>
			<p className="main-grey-p">{props.description}</p>
			<RedBtn btntext="BUY NOW" />
		</div>
	);
}

function MainTallCard1(props) {
	return (
		<div>
			<img src={props.image} alt="" />
			<h3 className="MainWide-h2">{props.venue}</h3>
			<div className="main-grey-i-container">
				<span className="main-grey-i">
					<i class="fas fa-map-marker-alt"></i>
					{props.location}
				</span>
				&nbsp;&nbsp;
				<span className="main-grey-i">
					<i class="far fa-clock"></i> {props.time}
				</span>
			</div>
			<p className="main-grey-p">{props.description}</p>
			<GreyBtn btntext="SOLD OUT" />
		</div>
	);
}

function MainTallCard2(props) {
	return (
		<div>
			<img src={props.image} alt="" />
			<h3 className="MainWide-h2">{props.venue}</h3>
			<div className="main-grey-i-container">
				<span className="main-grey-i">
					<i class="fas fa-map-marker-alt"></i>
					{props.location}
				</span>
				&nbsp;&nbsp;
				<span className="main-grey-i">
					<i class="far fa-clock"></i>
					{props.time}
				</span>
			</div>
			<p className="main-grey-p">{props.description}</p>
			<GreenBtn btntext="WATCH LIVE" />
		</div>
	);
}

function MainBlogCard(props) {
	return (
		<div className="MainBlogCardContainer">
			<img src={props.image} alt="" />
			<div className="blog-card-contents">
				<h2 className="MainWide-h2">{props.heading}</h2>
				<div className="main-grey-i-container">
					<span className="main-grey-i">
						<i class="fas fa-calendar-alt"></i>
						{props.date}
					</span>
					&nbsp;&nbsp;
					<span className="main-grey-i">
						<i class="fas fa-comments"></i>
						{props.numofcomments}
						COMMENTS
					</span>
					&nbsp;&nbsp;
					<span className="main-grey-i">
						<i class="fas fa-tag"></i>
						MUSIC
					</span>
				</div>
				<p className="main-grey-p">{props.description}</p>
				<ReadMore />
			</div>
		</div>
	);
}

function MainAritstCard(props) {
	return (
		<div className="MainArtistCardContainer">
			<div className="mac-img-btn-txt">
				<img src={props.image} alt="" />
			</div>
			<div className="mac-view">
				<i className="mac-view-btn">{props.icon}</i>
				<div className="mac-view-text">
					<spam className="mac-h4">{props.text}</spam>
					<p className="mac-p">{props.subtext}</p>
				</div>
			</div>
		</div>
	);
}

function ArtistCardHead(props) {
	return (
		<div className="ArtistCardHead">
			<div>
				{props.white}&nbsp;&nbsp;
				<span className="main-txt-red">{props.red}</span>
			</div>
			<div className="ArtistCardHeadBtn">
				<RedBtnSmall btntext="VIEW ALL >>" />
			</div>
		</div>
	);
}

export {
	MainWideCard1,
	MainTallCard1,
	MainTallCard2,
	MainBlogCard,
	MainAritstCard,
	ArtistCardHead,
};
