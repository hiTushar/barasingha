import React from 'react';
import './Certifications.scss';
import westcoast from '../../../media/westcoast.svg';
import opswat from '../../../media/opswat.png';
import times from '../../../media/times.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const certifications = [
   { image: westcoast, name: 'West Coast Labs', desc: 'NPAV was awarded in multiple independent tests' },
   { image: opswat, name: 'OPSWAT Certification', desc: 'NPAV is a ‘Top Player’ in endpoint security.' },
   { image: times, name: 'Times Power Brand', desc: 'NPAV is among Established Vendors in endpoint protection' }
];

function Certifications() {

   function getCurrentDimension() {
      if (window.innerWidth < 769) {
         return true;
      }
      return false;
   }

   return (
      <div className="certifications_container">
         <div className="container">
            <div className="certification_content_container">
               <div className="title-wrapper">
                  <h6 className="heading heading--fancy text-center">Appreciations</h6>
                  <h2 className="heading heading--two text-center">Our Certifications</h2>
               </div>
               <div className="certificate-container">
                  {getCurrentDimension() && <OwlCarousel
                     items={1}
                     className="owl-theme text-center"
                     loop
                     speed={1000}
                     autoplay={true}
                     autoplaySpeed={1000}
                     nav={false}
                     dots={true}
                     margin={8}
                     center>
                     {certifications.map((certification, index) => (
                        <div className="certificate_card" key={index}>
                           <img className="certificate_image" src={certification.image} alt={certification.image} />
                           <h2 className="heading heading--three">{certification.name}</h2>
                           <p className="para para--light">{certification.desc}</p>
                        </div>
                     ))}
                  </OwlCarousel>}
                  {!getCurrentDimension() && <div className="certificate-row">
                     {certifications.map((certification, index) => (
                        <div key={index}>
                           <div className="certificate_card flex-fill" key={index}>
                              <img className="certificate_image" src={certification.image} alt={certification.image} />
                              <h2 className="heading heading--three">{certification.name}</h2>
                              <p className="para para--light">{certification.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Certifications;