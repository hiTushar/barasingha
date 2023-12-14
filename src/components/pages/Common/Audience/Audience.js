import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Audience.scss';
import audienceData from "../../../data/products.json";

function Audience() { 

   const audiences = audienceData.results;

   // const [audiences, setAudienceData] = useState([]);

   // useEffect(() => {
   //    fetchData();
   //  }, []);

   //  const fetchData = () => {
   //    try {
   //      const response = audienceData; // this will be the fetch point
   //       if(response && response.status === 200 ){
   //          const result = response.results;
   //          setAudienceData(result);
   //       }
   //       else {
   //          //alert once design team confirms
   //       }
   //    } catch (error) {
   //      console.error('Error fetching data:', error);
   //    }
   //  };
   
   function getCurrentDimension() {
      if (window.innerWidth < 769) {
         return true;
      }
      return false;
   }
   return (
      <div className="audiences_container">
         <div className="audience_content_container component-container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">Audience</h6>
               <h2 className="heading heading--two text-center">What Do Our Clients Think?</h2>
            </div>
            <div className="products_carousel">
               <OwlCarousel
                  items={getCurrentDimension() ? 1 : 3}
                  className="owl-theme"
                  loop={true}
                  nav={true}
                  dots={true}
                  margin={10}
                  navContainerClass="owl-nav" >
                  {audiences.map((audience, index) => (
                     <div className="audience-card" key={index}>
                        <div className="left_content"><img className="audience_image" src={`${audience.audience_image_url}`} alt="audience_image" /></div>
                        <div className="right_content">
                           <div className="company_logo"><img className="company_logo" src={`${audience.audience_logo}`} alt="company_logo" /></div>
                           <div className="audience_view">{audience.audience_view}</div>
                           <div className="audience_name">{audience.audience_name}</div>
                        </div>
                     </div>
                  ))}
               </OwlCarousel>
            </div>
         </div>

      </div>
   )
}


export default Audience;