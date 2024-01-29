import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonials.scss';
import StarFilled from "../../../../media/StarFilled.svg";
import StarOutlined from "../../../../media/StarOutlined.svg";
import testimonialsData from "../../../data/testimonial.json";
import { v4 as uuidv4 } from 'uuid';

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
      if (window.innerWidth < 768) {
         return true;
      }
      return false;
   }

   return (
      <div className="career_testimonials_container position-relative">
         <div className="testimonial_content_container">
            <div className="title-wrapper">
               <p className="heading--fancy text-center">Testimonials</p>
               <p className="heading--two text-center my-2">What Our Employees Says?</p>
            </div>
            <div className='component-container'> 
               <div className='career_carousel'>   
                  <OwlCarousel
                     items={getCurrentDimension() ? 1 : 3}
                     className="owl-theme"
                     loop={true}
                     nav={getCurrentDimension() ? false : true}
                     dots={true}
                     margin={getCurrentDimension() ? 10 : 20} 
                  >
                     {testimonials.map((testimonial) => (
                        <div className="career_testimonial-card" key={uuidv4()}>
                           <div className='testimonial-person'>
                              <img className="image" src={`${testimonial.testimonial_image_url}`} alt={"logo"} />
                              <div className='testimonial-text'>
                                 <p>{testimonial.testimonial_name}</p>
                                 <p>{testimonial.testimonial_position}</p>
                              </div>
                              <div className='rating'>
                                 {Array.apply(null, { length: testimonial.testimonial_rating }).map((e) => (
                                    <img key={uuidv4()} className="image" src={StarFilled} alt={"⭐️"} />
                                 ))}
                                 {Array.apply(null, { length: 5 - testimonial.testimonial_rating }).map((e) => (
                                    <img key={uuidv4()} className="image" src={StarOutlined} alt={"⭐️"} />
                                 ))}
                              </div>
                           </div>
                           <p className="testimonial-it-is">{testimonial.testimonial_about}</p>
                        </div>
                     ))}
                  </OwlCarousel>
               </div>
            </div>
         </div>

      </div>
   )
}


export default Testimonials;