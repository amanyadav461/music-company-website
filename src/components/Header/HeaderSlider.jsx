import React from "react";
import Slider from "react-slick";
import HeaderSliderItems from "./HeaderSliderItems";
import SliderDots from "./HeaderSliderDots";

export default function HeaderSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div>
			<SliderDots>
			<Slider {...settings}>
				<HeaderSliderItems
					heading="Awaaz the largest music theme"
					description="Awaaz is a powerfull and responsive Music Band & DJ with pretty much advanced features like display Artist, Albums, PhotoGallery, Video Gallery and Events each with its own post type"
					btntext="BUY THEME"
				/>
				<HeaderSliderItems
					heading="Awaaz the largest music theme"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					btntext="BUY THEME"
				/>
				<HeaderSliderItems
					heading="Awaaz the largest music theme"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					btntext="BUY THEME"
				/>
			</Slider>
			</SliderDots>
		</div>
	);
}
