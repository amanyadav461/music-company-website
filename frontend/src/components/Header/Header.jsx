import React from "react";
import HeaderSlider from "./HeaderSlider";
import HeaderFeatures from "./HeaderFeatures";
import "./Header.css";

export default function Header() {
	return (
		<div className="home-container">
			<div className="Header-main">
				<HeaderSlider />
			</div>
			<div className="header-feature">
				<div className="header-feature-heading">
					<h1 className="header-feat-head">
						Welcome To <span className="main-txt-red">Awaaz music</span> theme
					</h1>
					<p className="header-feat-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
						<span className="header-txt-red">
							sed do eiusmod tempor oidsioaidhai.
						</span>
					</p>
				</div>
				<div className="flex-box">
					<HeaderFeatures
						icon={<i class="fas fa-calendar-alt"></i>}
						heading="EVENTS"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
					<HeaderFeatures
						icon={<i class="fas fa-music"></i>}
						heading="ALBUM"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
					<HeaderFeatures
						icon={<i class="fas fa-headphones"></i>}
						heading="ARTIST"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>
			</div>
		</div>
	);
}
