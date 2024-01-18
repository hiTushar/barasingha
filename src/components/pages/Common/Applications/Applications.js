import React from 'react';
import './products_Applications.scss';
import placeholder1 from "../../../../media/placeholder_img_2.webp";
import placeholder2 from "../../../../media/placeholder_img_1.webp";
import placeholder3 from "../../../../media/placeholder_img_33.png";
import placeholder4 from "../../../../media/placeholder_img_4.webp";

function Applications() {
   return (
      <div className="component-container">
         <div className="project_container">
            <div className="title-wrapper">
               <p className="heading--fancy text-center">Applications</p>
               <p className="heading--two text-center my-2">Supercharge Your Infrastructure By</p>
            </div>

            <div className="projects">
               <div className="project-card">
                  <p className="heading heading--three padding-16">Protect patient data from malicious bots</p>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine learning and fingerprinting.</p>
                  <div className="image-card">
                     <img src={placeholder1} className="align" alt="securitysuite" />
                  </div>
               </div>
               <div className="project-card">
                  <p className="heading heading--three padding-16">Secure remote access for teachers and students</p>
                  <p className="para para--light">Give physicians, administrators, developers, and contractors secure and streamlined access to internal systems.</p>
                  <div className="image-card">
                     <img src={placeholder4} className="align" alt="firewall" />
                  </div>
               </div>
               <div className="project-card">
                  <p className="heading heading--three padding-16">Remediation</p>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine.</p>
                  <div className="image-card">
                     <img src={placeholder2} className="align" alt="securitysuite" />
                  </div>

               </div>
               <div className="project-card">
                  <p className="heading heading--three padding-16">Root cause analysis</p>
                  <p className="para para--light">Give physicians, administrators, developers</p>
                  <div className="image-card">
                     <img src={placeholder3} className="align" alt="firewall" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Applications;