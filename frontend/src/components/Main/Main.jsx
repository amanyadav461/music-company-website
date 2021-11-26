import React from "react";
import "./Main.css";

import {
	MainWideCard1,
	MainBlogCard,
	MainTallCard1,
	MainTallCard2,
	MainAritstCard,
	ArtistCardHead,
} from "./MainCards";

//Images
import img1wide from "../../images/img-1-wide.png";
import img1tall from "../../images/img-1-tall.png";
import img2tall from "../../images/img-2-tall.png";
import blogimg1 from "../../images/blog-img-1.png";
import blogimg2 from "../../images/blog-img-2.png";
import blogimg3 from "../../images/blog-img-3.png";
import blogimg4 from "../../images/blog-img-4.png";
import artimg1 from "../../images/art-1.png";
import artimg2 from "../../images/art-2.png";
import artimg3 from "../../images/art-3.png";
import artimg4 from "../../images/art-4.png";
import artimg5 from "../../images/art-5.png";
import artimg6 from "../../images/art-6.png";
import artimg7 from "../../images/art-7.png";
import artimg8 from "../../images/art-8.png";

export default function Main() {
	return (
		<div className="main">
			<div className="main-bottom">
				<div className="main-events">
					<div className="main-wide-event">
						<div className="main-feat-head main-btm-head">
							// UPCOMING <span className="main-txt-red">EVENTS</span>
						</div>
						<MainWideCard1
							image={img1wide}
							venue="Bridgstone Arena"
							location="Kristal Glam Club"
							time="10:28 pm - 06:00 am"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."
						/>
					</div>
					<div className="main-tall-events">
						<MainTallCard1
							venue="Night Inspirescu Party"
							image={img1tall}
							location="La Mania Club"
							time="All Day"
							description="Lorem ipsum dolor sit amet"
						/>
						<MainTallCard2
							venue="Dj Robag Ruhme"
							image={img2tall}
							location="Kristal Glam Club"
							time="10:28 pm - 06:00 am"
							description="Lorem ipsum dolor sit amet"
						/>
					</div>
				</div>
				<div className="main-btm-blog">
					<div className="main-feat-head main-btm-head">
						// FROM <span className="main-txt-red">THE BLOG</span>
					</div>
					<div className="main-blog-container">
						<MainBlogCard
							heading="Nulla rutrum felis ev interdum"
							image={blogimg1}
							date="OCTOBER 4, 2013"
							numofcomments="3"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."
						/>
						<MainBlogCard
							heading="Nulla rutrum felis ev interdum"
							image={blogimg2}
							date="OCTOBER 4, 2013"
							numofcomments="3"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."
						/>
						<MainBlogCard
							heading="Nulla rutrum felis ev interdum"
							image={blogimg3}
							date="OCTOBER 4, 2013"
							numofcomments="3"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."
						/>
						<MainBlogCard
							heading="Nulla rutrum felis ev interdum"
							image={blogimg4}
							date="OCTOBER 4, 2013"
							numofcomments="3"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."
						/>
					</div>
				</div>
			</div>
			<div className="main-before-ft-card">
				<div className="main-before-footer">
					<div className="mbf-card">
						<ArtistCardHead white="// LATEST" red="VIDEOS" />
						<div className="mbf-card-cont">
							<MainAritstCard
								image={artimg1}
								icon={<i class="fas fa-video"></i>}
								text="Simple Summer Session"
								subtext="9-October-2021"
							/>
							<MainAritstCard
								image={artimg2}
								icon={<i class="fas fa-video"></i>}
								text="Quantum Force"
								subtext="27-September-2021"
							/>
						</div>
					</div>
					<div className="mbf-card">
						<ArtistCardHead white="// LATEST" red="ALBUMS" />
						<div className="mbf-card-cont">
							<MainAritstCard
								image={artimg3}
								icon={<i class="fas fa-headphones"></i>}
								text="Large Worldwide"
								subtext="Deep House, Pop/Rock"
							/>
							<MainAritstCard
								image={artimg4}
								icon={<i class="fas fa-headphones"></i>}
								text="Desire Evira"
								subtext="Hip-Hopm Pop/Rock"
							/>
						</div>
					</div>
					<div className="mbf-card">
						<ArtistCardHead white="// LATEST" red="GALLERY" />
						<div className="mbf-card-cont">
							<MainAritstCard
								image={artimg5}
								icon={<i class="fas fa-camera"></i>}
								text="Sixth Element Club"
								subtext="@Oslo, Norway"
							/>
							<MainAritstCard
								image={artimg6}
								icon={<i class="fas fa-camera"></i>}
								text="Bejing Live Show"
								subtext="@Bejing, China"
							/>
						</div>
					</div>
					<div className="mbf-card">
						<ArtistCardHead white="// LATEST" red="ARTIST" />
						<div className="mbf-card-cont">
							<MainAritstCard
								image={artimg7}
								icon={<i class="fas fa-user"></i>}
								text="DJ Charlie White"
								subtext="Deep House"
							/>
							<MainAritstCard
								image={artimg8}
								icon={<i class="fas fa-user"></i>}
								text="Aaron La Crate"
								subtext="Trance"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
