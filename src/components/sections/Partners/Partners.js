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

   return (
      <div className="partners_container position-relative">
         <div className="partner_content_container">
            <div className="component-container">
               <div className="heading">Collaboration</div>
               <div className="sub_title">Our Partners</div>
            </div>
            <div className='partner-carousel-container'>
               <OwlCarousel
                  items={getCurrentDimension() ? 1 : 3}
                  className="owl-theme"
                  loop={true}
                  nav={false}
                  dots={true}
                  margin={10}
                  navContainerClass="owl-nav"
                  stagePadding={getCurrentDimension() ? 0 : 120} >
                  {partners.map((partner, index) => (
                     <div className="partner-card" key={index}>
                        <img className="partner_logo" src={`${partner.partner_logo_url}`} alt={"logo"}/>
                        <p className= "para para--light desc">{partner.partner_description}</p>
                     </div>
                  ))}
               </OwlCarousel>
               <div className='partner-carousel-overlay'></div>
            </div>
         </div>

      </div>
   )
}


export default Partners;