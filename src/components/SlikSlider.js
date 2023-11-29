import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlikSlider({ children, ...props }) {


    const settings = {
        centerPadding: "4%",
        autoPlay: true,
        arrows: false, 
        ...props,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMargin:" 10%",
        slidesToScroll: 1,
        // centerMode: true
        // centerPadding: "10%",
    };
    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div >
    );
}
export default SlikSlider