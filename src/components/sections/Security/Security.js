import React, { useEffect, useState } from 'react';
import './Security.scss';
import headImg from "../../../media/Extracted-Head 3 (1).webp";
import noisePng from "../../../media/noise.webp";
import { Link } from 'react-router-dom';
import blogsData from "../../data/blogs.json";

function Security() {

   // eslint-disable-next-line no-unused-vars
   const [resize, setResize] = useState(false);

   const [blogs, setBlogData] = useState([]);

   useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = blogsData; // this will be the fetch point
         if(response && response.status === 200 ){
            const result = response.results;
            setBlogData(result);
         }
         else {
            //alert once design team confirms
         }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   window.addEventListener("resize", function (event) {
      if (this.document.body.clientWidth < 769) {
         setResize(true)
      }
   })

   return (
      <div className="security_main_container">
         <div className="component-container">
            <div className="security_main_contents_container">
               <div className="content_container_left">
                  <div className="title-wrapper">
                     <p className="heading heading--fancy">Security</p>
                     <p className="heading heading--two">
                        Forecasting Trends in Cyber Security
                     </p>
                  </div>

               </div>
               <div className="blog-container">
                  {blogs.map((blog, index) => (
                     <div className="blog-item" key={index}>
                        <Link to={blog.blog_image_url} className={`blog-card a${index + 1}`}>
                           <img className="dot-img" src={noisePng} alt="texture"/>
                           <svg xmlns="http://www.w3.org/2000/svg" width="380" height="234" viewBox="0 0 380 234" fill="none">
                              <g style={{ mixBlendMode: "difference" }} opacity="0.32" filter="url(#filter0_f_1048_1601)">
                                 <ellipse cx="195.968" cy="86.801" rx="100.808" ry="100.516" fill="#7BBA9C"></ellipse>
                              </g>
                              <defs>
                                 <filter id="filter0_f_1048_1601" x="-114.919" y="-223.794" width="621.774" height="621.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                    <feGaussianBlur stdDeviation="105.04" result="effect1_foregroundBlur_1048_1601"></feGaussianBlur>
                                 </filter>
                              </defs>
                           </svg>
                           <div className="blog_type"><span> {blog.blog_type}</span></div>
                           <div className="blog_heading">{blog.blog_title}</div>
                           <div className="publish_date">Published on {blog.blog_date}</div>

                           <div className='head-shield'>
                              <img className="head-img" src={headImg} alt="Barasingha Shield"/>
                           </div>

                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Security;
