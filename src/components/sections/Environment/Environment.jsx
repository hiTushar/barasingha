import * as React from "react";
import "./Environment.scss";
import passwordSvg from "../../../media/password.svg"
import flashDriveSvg from "../../../media/flashDisk.svg"
import DBSVG from '../../../media/Database.svg'
import noisePng from "../../../media/noise.png";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
];

const Card = (props) => {
   return (
      <div className="env_card">
         <div className="env_card_noise"><img src={noisePng} alt="noise"></img></div>
         <div className="env_card_contents_container justify-content-center">
            <div className='img_container'><img src={props.image} alt="password svg"></img></div>
            <div className="env_card_text_container">
               <div className='heading heading--three text-center'>{props.heading}</div>
               <div className="para para--light text-center">{props.desc}</div>
            </div>
         </div>
      </div>
   )
}

const Environment = (props) => {

   const sliderRef = React.useRef(null)
   const sliderRef2 = React.useRef(null)


   const settings = {
      dots: false,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "40%",
      margin: "0%",
      nav: false,
   }

   const settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      nav: false,
      centerPadding: "10%"
   }

   const handleSliderWheel = (e) => {
      e.preventDefault()
      if (e.deltaY > 0) {
         sliderRef.current.slickNext()
      } else {
         sliderRef.current.slickPrev()
      }
   }

   const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden'
   }

   const handleMouseLeave = () => {
      document.body.style.overflow = 'auto';
   }


   return (
      <section className="env__main_container">
         <div className="container">
            <div className="env__main_contents_container">
               <div className="row align-items-center">
                  <div className="col">
                     <div className="content_container_left">
                        <div className="title-wrapper">
                           <h6 className="heading heading--fancy">Environment</h6>
                           <h2 className="heading heading--two">
                              A Radically Sensible Approach to Data Protection
                           </h2>
                           <p className="para para--lg para--light mt-4 mb-0">
                              Effortless implementation. Single pane of glass, one-click
                              management for all products
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-5 ms-auto">
                     <div className="content_container_right ms-auto d-none d-md-block">
                        <div className="env__ellipse"></div>
                        <div className="carousel-container">
                           <div
                              onWheel={handleSliderWheel}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                           >
                              <Slider {...settings} ref={sliderRef}>
                                 {cardsData.map((card, index) =>
                                    <Card key={index} className="carousel-item" image={card.image} heading={card.heading} desc={card.desc} />
                                 )}
                              </Slider>
                           </div>
                        </div>
                        <div className="overlay"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="custom-container px-0">
            <div className="content_container_right position-relative d-block d-md-none">
               <div className="env__ellipse"></div>
               <div className="carousel-container">
                  <Slider {...settings2} ref={sliderRef2}>
                     {cardsData.map((card, index) =>
                        <Card key={index} className="carousel-item" image={card.image} heading={card.heading} desc={card.desc} />
                     )}
                  </Slider>
               </div>
               <div className="overlay"></div>
            </div>
         </div>

      </section>
   );
};

export default Environment;
