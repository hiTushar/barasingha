import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonials.scss';
import StarFilled from "../../../../media/StarFilled.svg";
import StarOutlined from "../../../../media/StarOutlined.svg";
import testimonialsData from "../../../data/testimonial.json";

function Testimonials() {

   const testimonials = testimonialsData.results;

   // const [testimonials, setTestimonialsData] = useState([]);

   // useEffect(() => {
   //    fetchData();
   //  }, []);

   //  const fetchData = () => {
   //    try {
   //      const response = testimonialsData; // this will be the fetch point
   //       if(response && response.status === 200 ){
   //          const result = response.results;
   //          setTestimonialsData(result);
   //       }
   //       else {
   //          //alert once design team confirms
   //       }
   //    } catch (error) {
   //      console.error('Error fetching data:', error);
   //    }
   //  };

   function getCurrentDimension() {
      if (window.innerWidth < 950) {
         return true;
      }
      return false;
   }

   return (
      <div className="career_testimonials_container position-relative">
         <div className="testimonial_content_container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">Testimonials</h6>
               <h2 className="heading heading--two text-center my-2">What Our Employees Says?</h2>
            </div>
            <div className='career_carousel'>
               <OwlCarousel
                  items={getCurrentDimension() ? 1 : 3}
                  className="owl-theme"
                  loop={false}
                  nav={getCurrentDimension() ? false : true}
                  dots={true}
                  margin={10}
                  //stagePadding={getCurrentDimension() ? 32 : 112} 
                  >
                  {testimonials.map((testimonial, index) => (
                     <div className="career_testimonial-card" key={index}>
                        <div className='testimonial-person'>
                           <img className="image" src={`${testimonial.testimonial_image_url}`} alt={"logo"} />
                           <div>
                              <h3 className='heading heading--three'>{testimonial.testimonial_name}</h3>
                              <p className='para para--sm para--light'>{testimonial.testimonial_position}</p>
                           </div>
                           <div className='rating'>
                              {Array.apply(null, { length: testimonial.testimonial_rating }).map((e, i) => (
                                 <img className="image" src={StarFilled} alt={"⭐️"} />
                              ))}
                              {Array.apply(null, { length: 5 - testimonial.testimonial_rating }).map((e, i) => (
                                 <img className="image" src={StarOutlined} alt={"⭐️"} />
                              ))}
                           </div>
                        </div>
                        <p className="para mt-4">{testimonial.testimonial_about}</p>
                     </div>
                  ))}
               </OwlCarousel>
            </div>
         </div>

      </div>
   )
}


export default Testimonials;