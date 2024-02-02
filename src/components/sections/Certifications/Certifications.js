import React from 'react';
import './Certifications.scss';
import westcoast from '../../../media/westcoast.svg';
import opswat from '../../../media/opswat.webp';
import times from '../../../media/times.webp';
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

   function getItemCount() {
      let width = window.innerWidth;

      if(width < 576) {
         return 1;
      }
      else if (width < 992) {
         return 2;
      }
      else {
         return 3;
      }
   }

   function checkCenter() {
      let width = window.innerWidth;

      if(width < 576) {
         return true;
      }
      return false;
   }

   return (
      <div className="certifications_container">
         <div className="component-container">
            <div className="certification_content_container">
               <div className="title-wrapper">
                  <p className="heading heading--fancy text-center">Appreciations</p>
                  <p className="heading heading--two text-center">Our Certifications</p>
               </div>
               <div className="certificate-container">
                  {getCurrentDimension() && <OwlCarousel
                     items={getItemCount()}
                     className="owl-theme text-center"
                     loop
                     speed={1000}
                     autoplay={true}
                     autoplaySpeed={3000}
                     autoplayTimeout={3000}
                     nav={false}
                     dots={false}
                     margin={8}
                     center={checkCenter()}
                     autoplayHoverPause={true}
                     >
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