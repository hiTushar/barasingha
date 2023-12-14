import React, { useState } from 'react';
import { Button } from "../../../Button";
import arrow from "../../../../media/arrow.svg";
import career_image from "../../../../media/career_placeholder.webp";
import './Position.scss';
import { Link } from 'react-router-dom';
import ContactUsModal from 'components/pages/Forms/ContactUs';

import positionsData from '../../../data/career.json';

function Position() {

   const[showContactUsModal, setShowContactUsModal] =useState(false);

  const closeContactUsModal = () => setShowContactUsModal(false);

  const positions = positionsData.results;

  // const [positions, setPositionsData] = useState([]);

   // useEffect(() => {
   //    fetchData();
   //  }, []);

   //  const fetchData = () => {
   //    try {
   //      const response = positionsData; // this will be the fetch point
   //       if(response && response.status === 200 ){
   //          const result = response.results;
   //          setPositionsData(result);
   //       }
   //       else {
   //          //alert once design team confirms
   //       }
   //    } catch (error) {
   //      console.error('Error fetching data:', error);
   //    }
   //  };

   return (
      <div className="available-career-container component-container">
         <div className="available-career-positions ">
            <div className="career-image">
               <img src={career_image} alt={"career_image"} className="image" />
            </div>
            <div className="apply-section">
               <div className="join-team">
                  <div className="available-text">Available Career Positions</div>
                  <div className="para para--lg para--light my-3 mb-4">Join our team and help us build a secure future</div>
                  <Button buttonStyle='apply-now' onClick={() => setShowContactUsModal(true)}>APPLY NOW</Button>
               </div>
               {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal}/>}
               {/* Jobs */}
               <div className="job-positions">
               {positions.map((position) => (
                      <div className="job-cards">
                      <img src={`${position.career_position_image}`} alt="globe" title="globe" className='image' />
                      <div className="job-details">
                         <div className="job-title">{position.career_position_name}</div>
                         <div className="para para--sm exp-years">
                            <span className="exp">Experience:</span>
                            <span className="years ms-1 font-bold">{position.career_position_experience_required}</span>
                         </div>
                      </div>
                   </div>
                  ))}
               </div>
               <Link to='/careerdetailspage' className="see-all">
                  <span>See all</span>
                  <img className="arrow" src={arrow} alt="arrow" title="arrow" />
               </Link>
            </div>

         </div>
      </div>
   );
}

export default Position;