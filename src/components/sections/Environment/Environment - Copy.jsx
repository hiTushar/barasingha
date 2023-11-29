import React, { useLayoutEffect, useState } from "react";
import "./Environment.scss";
import passwordSvg from "../../../media/password.svg"
import flashDriveSvg from "../../../media/flashDisk.svg"
import DBSVG from '../../../media/DBSVG.svg'
import noisePng from "../../../media/noise.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const cardsData = [
    {
        image: flashDriveSvg,
        heading: 'Multi-Platform Solutions',
        desc: 'Outstanding coverage of Windows, macOS, iOS, Android, Lotus Domino & Linux'
    },
    {
        image: passwordSvg,
        heading: 'Easy Deployment Efforts',
        desc: 'Effortless implementation. Single pane of glass, one-click management for all products'
    },
    {
        image: DBSVG,
        heading: 'Low False Positives',
        desc: 'Multilayered technology assures best detection rates and minimal false positives'
    },
]

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

const Card = (props) => {
    return (
        <div className="env_card">
            <div className="env_card_noise"><img src={noisePng} alt="noise"></img></div>
            <div className="env_card_contents_container">
                <div className='img_container'><img src={props.image} alt="password svg"></img></div>
                <div className="env_card_text_container">
                    <div className='env_card_heading'>{props.heading}</div>
                    <div className="env_card_desc">{props.desc}</div>
                </div>
            </div>
        </div>
    )
}

const Environment = (props) => {

    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    function getCurrentDimension() {
        if (window.innerWidth < 769) {
            return true;
        }
        return false;
    }

    const settings = {
        dots: false,
        infinite: true,
        autoPlay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true, // Enable swipe to slide
        variableWidth: false, // Allow variable width for slides
        centerMode: true,
        draggable: true,
        initialSlide: 1,
        pauseOnHover: true,
        // centerPadding: '140px',
    };

    // var settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // vertical: false,
    // initialSlide: 1,
    // autoplay: true,
    // infinite: true,
    // speed: 500
    // };

    return (
        <div className="env__main_container">
            <div className="section-container">
                <div className="env__main_contents_container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="content_container_left">
                                <div className="heading_n_slog">
                                    <div className="env_heading">Environment</div>
                                    <div className="__slog_">
                                        A Radically Sensible Approach to Data Protection
                                    </div>
                                </div>
                                <div className="desc">
                                    Effortless implementation. Single pane of glass, one-click
                                    management for all products
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content_container_right">
                                <div className="env__ellipse"></div>
                                <div className>
                                    {/* <Slider {...settings}>
                                        {cardsData.map((card, index) =>
                                            <Card key={index} className="carousel-item" image={card.image} heading={card.heading} desc={card.desc} />
                                        )}
                                    </Slider> */}
                                    <OwlCarousel
                                        items={getCurrentDimension() ? 1 : 2}
                                        className="owl-theme"
                                        loop
                                        nav={true}
                                        margin={8}
                                    >
                                        {
                                            cardsData.map((card, index) =>
                                                <Card
                                                    key={index}
                                                    className="carousel-item"
                                                    image={card.image}
                                                    heading={card.heading}
                                                    desc={card.desc}
                                                />
                                            )
                                        }
                                    </OwlCarousel>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Environment;
