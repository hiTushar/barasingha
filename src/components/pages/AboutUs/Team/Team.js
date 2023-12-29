import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './team.scss';

import StarFilled from "../../../../media/StarFilled.svg";
import StarOutlined from "../../../../media/StarOutlined.svg";

import teamData from "../../../data/team.json";

const team = teamData.results;

// const [team, setTeamData] = useState([]);

// useEffect(() => {
//    fetchData();
//  }, []);

//  const fetchData = () => {
//    try {
//      const response = teamData; // this will be the fetch point
//       if(response && response.status === 200 ){
//          const result = response.results;
//          setTeamData(result);
//       }
//       else {
//          //alert once design team confirms
//       }
//    } catch (error) {
//      console.error('Error fetching data:', error);
//    }
//  };

function Team() {

   function getCurrentDimension() {
      if (window.innerWidth < 768) {
         return true;
      }
      return false;
   }

   return (
      <div className="testimonials_container position-relative">
         <div className="testimonial_content_container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">We believe teamwork</h6>
               <h2 className="heading heading--two text-center my-2">Meet The Team</h2>
            </div>
            <div className='about_carousel'>
               <div className='component-container'>
                  <OwlCarousel
                     items={getCurrentDimension() ? 1 : 3}
                     className="owl-theme"
                     loop={false}
                     nav={getCurrentDimension() ? false : true}
                     dots={true}
                     margin={10}
                     //stagePadding={getCurrentDimension() ? 32 : 112} 
                     >
                     {team.map((teammember, index) => (
                        <div className="testimonial-card" key={index}>
                           <div className='testimonial-person'>
                              <img className="image" src={`${teammember.team_member_image_url}`} alt={"logo"} />
                              <div>
                                 <h3 className='heading heading--three'>{teammember.team_member_name}</h3>
                                 <p className='para para--sm para--light'>{teammember.team_member_position}</p>
                              </div>
                              <div className='rating'>
                                 {Array.apply(null, { length: teammember.team_member_about }).map((e, i) => (
                                    <img className="image" src={StarFilled} alt={"⭐️"} />
                                 ))}
                                 {Array.apply(null, { length: 5 - teammember.team_member_about }).map((e, i) => (
                                    <img className="image" src={StarOutlined} alt={"⭐️"} />
                                 ))}
                              </div>
                           </div>
                           <p className="para mt-4">{teammember.team_member_about}</p>
                        </div>
                     ))}
                  </OwlCarousel>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Team;