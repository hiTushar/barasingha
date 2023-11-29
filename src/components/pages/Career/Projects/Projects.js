import React from 'react';
import './Projects.scss';
import project1 from "../../../../media/career_project_1.png";
import project2 from "../../../../media/career_project_2.png";
import project3 from "../../../../media/career_project_3.png";
import project4 from "../../../../media/career_project_4.png";

function Applications() {
   return (
      <div className="career_project_container">
         <div className="container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">Projects</h6>
               <h2 className="heading heading--two text-center my-2">Products You Get to Work on</h2>
            </div>

            <div className="projects">
               <div className="project-card">
                  <div className="image-card">
                     <img src={project1} className="align" alt="securitysuite" />
                  </div>
                  <h3 className="heading heading--three">Security Suite</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine learning and fingerprinting.</p>
               </div>
               <div className="project-card">
                  <div className="image-card">
                     <img src={project2} className="align" alt="firewall" />
                  </div>
                  <h3 className="heading heading--three">Firewall</h3>
                  <p className="para para--light">Give physicians, administrators, developers, and contractors secure and streamlined access to internal systems.</p>
               </div>
               <div className="project-card">
                  <div className="image-card">
                     <img src={project3} className="align" alt="securitysuite" />
                  </div>
                  <h3 className="heading heading--three">VPN</h3>
                  <p className="para para--light">Accurately identify bots by applying behavioural analysis, machine.</p>

               </div>
               <div className="project-card">
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