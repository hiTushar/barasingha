import React from 'react';
import './products_Applications.scss';
import placeholder1 from "../../../../media/placeholder_img_2.png";
import placeholder2 from "../../../../media/placeholder_img_1.png";
import placeholder3 from "../../../../media/placeholder_img_3.png";
import placeholder4 from "../../../../media/placeholder_img_4.png";

function Applications() {
   return (
      <div className="project_container">
         <div className="container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">Applications</h6>
               <h2 className="heading heading--two text-center my-2">Supercharge Your Infrastructure By</h2>
            </div>

            <div className="projects">
               <div className="project-card">
                  <h3 className="heading heading--three padding-16">Protect patient data from malicious bots</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine learning and fingerprinting.</p>
                  <div className="image-card">
                     <img src={placeholder1} className="align" alt="securitysuite" />
                  </div>
               </div>
               <div className="project-card1">
                  <h3 className="heading heading--three padding-16">Secure remote access for teachers and students</h3>
                  <p className="para para--light">Give physicians, administrators, developers, and contractors secure and streamlined access to internal systems.</p>
                  <div className="image-card">
                     <img src={placeholder4} className="align" alt="firewall" />
                  </div>
               </div>
               <div className="project-card">
                  <h3 className="heading heading--three padding-16">Remediation</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine.</p>
                  <div className="image-card">
                     <img src={placeholder2} className="align" alt="securitysuite" />
                  </div>

               </div>
               <div className="project-card">
                  <h3 className="heading heading--three padding-16">Root cause analysis</h3>
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