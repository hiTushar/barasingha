import React from 'react';
import { Link } from 'react-router-dom';
import './SearchCaseStudy.scss';
import video2 from "../../../../media/faq-ball.mp4";
import iconSearchOutlined from '../../../../media/iconSearchOutlined.svg';
import caseStudyData from "../../../data/case_studies.json";

function Search() {

   const caseStudy = caseStudyData.results;

   return (
      <div className="search_container">
         <div className="search">
            <div className='form-group form-icon form-icon--left'>
               <input type="search" className='form-control' placeholder='Search case studies' />
               <img src={iconSearchOutlined} className="form-control-icon" alt="search" />
            </div>
         </div>
         <div className="projects">
         {caseStudy.map((study) => (
            <div className="project-card">
               <div className="image-card">
                  <img src={`${study.case_study_icon_url}`} className="align" alt="globe" />
               </div>

               <h3 className="heading heading--three padding-32">{study.case_study_title}</h3>
               <p className="para para--light padding-20">{study.case_study_description}</p>
               <Link to={study.case_study_link_url} className="padding-20">Read More</Link>
            </div>
         ))}
            <div className="faq-saphere-box faq-saphere2">
               <div className="video-box">
                  <video disableRemotePlayback src={video2} autoPlay loop muted playsInline></video>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Search;