import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import React from "react";

const carousel = ({ images }) => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<>
			<div className="imgslider">
				<Slider {...settings}>
					{images.map((item) => (
						<div key={item.id} >
							<img
								src={item.src}
								alt={item.alt}
								className="carousel-img"
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};
export default carousel;