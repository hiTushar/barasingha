import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Partners.scss';
import partnersData from "../../data/partners.json"; 


function Partners() { 
   const partners = partnersData.results;
   
   // const [partners, setPartnersData] = useState([]);

   // useEffect(() => {
   //    fetchData();
   //  }, []);

   //  const fetchData = async () => {
   //    try {
   //      const response = await partnersData; // this will be the fetch point
   //       if(response && response.status === 200 ){
   //          const result = response.results;
   //          setPartnersData(result);
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

   function getItemCount() {
      const width = window.innerWidth;

      if(width < 576) {
         return 1;
      }
      else if(width < 992) {
         return 2;
      }
      else {
         return 3;
      }
   }

   return (
      <div className="partners_container position-relative">
         <div className="partner_content_container">
            <div className="title-wrapper">
               <p className="heading heading--fancy">Collaboration</p>
               <p className="heading heading--two">Our Partners</p>
            </div>
            <div className='partner-carousel-container'>
               <OwlCarousel
                  items={getItemCount()}
                  className="owl-theme"
                  loop={true}
                  nav={false}
                  dots={false}
                  margin={5}
                  navContainerClass="owl-nav"
                  stagePadding={getCurrentDimension() ? 0 : 80}
                  center={true}
                  autoplay={true}
                  slideTransition={'linear'}
                  autoplayTimeout={3000}
                  autoplaySpeed={3000}
                  autoplayHoverPause={true}
               >
                  {partners.map((partner, index) => (
                     <div className="partner-card" key={index}>
                        <img className="partner_logo" src={`${partner.partner_logo_url}`} alt={"logo"}/>
                        <p className= "para para--light desc">{partner.partner_description}</p>
                     </div>
                  ))}
               </OwlCarousel>
               {
                  window.innerWidth >= 576 ?
                     <div className='partner-carousel-overlay'></div> :
                     null
               }
            </div>
         </div>
      </div>
   )
}


export default Partners;