import React from 'react';
import './Projects.scss';
import noisePng from "../../../../media/noise.webp";
import project1 from "../../../../media/career_project_1.webp";
import project2 from "../../../../media/career_project_2.webp";
import project3 from "../../../../media/career_project_3.webp";
import project4 from "../../../../media/career_project_4.webp";

function Applications() {
   return (
      <div className="component-container">
         <div className="career_project_container">
            <div className="title-wrapper">
               <p className="heading--fancy text-center">Projects</p>
               <p className="heading--two text-center my-2">Products You Get to Work on</p>
            </div>

            <div className="projects">
               <div className="project-card">
                  <img className="project-card-dot-img" src={noisePng} alt="texture"/>  
                  <div className="image-card">
                     <img src={project1} className="align" alt="securitysuite" />
                  </div>
                  <h3 className="heading heading--three">Security Suite</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine learning and fingerprinting.</p>
               </div>
               <div className="project-card">
                  <img className="project-card-dot-img" src={noisePng} alt="texture"/>
                  <div className="image-card">
                     <img src={project2} className="align" alt="firewall" />
                  </div>
                  <h3 className="heading heading--three">Firewall</h3>
                  <p className="para para--light">Give physicians, administrators, developers, and contractors secure and streamlined access to internal systems.</p>
               </div>
               <div className="project-card">
                  <img className="project-card-dot-img" src={noisePng} alt="texture"/>
                  <div className="image-card">
                     <img src={project3} className="align" alt="securitysuite" />
                  </div>
                  <h3 className="heading heading--three">VPN</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine.</p>
               </div>
               <div className="project-card">
               <img className="project-card-dot-img" src={noisePng} alt="texture"/>
                  <div className="image-card">
                     <img src={project4} className="align" alt="firewall" />
                  </div>
                  <h3 className="heading heading--three">Malware Detection</h3>
                  <p className="para para--light">Give physicians, administrators, developers</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Applications;