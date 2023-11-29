import React from 'react';
import './SolutionsBanner.scss';
import download from '../../../../media/download.svg';
import HerosectionSolution from '../../../../media/HerosectionSolution.svg';

function SolutionsPage() {
   return (
      <div className="solutions_banner_container">
         <div className="container">
            <div className="left_container">
               <div className="title-wrapper">
                  <h6 className="heading heading--fancy">Healthcare</h6>
                  <h1 className="heading heading--one text-gradient">NPAV for Healthcare and Life Sciences</h1>
                  <p className="para para--lg para--light my-4">
                     Protect patient data, accelerate performance, and offer employees and third parties secure access to internal systems with Cloudflare
                  </p>
               </div>
               <div className="btn_container">
                  <button className="btn_contact_sales"><img src={download} alt="download" />Download a Sample Report</button>
               </div>
            </div>
            <div className="right_container">
               <img src={HerosectionSolution} alt="HerosectionSolution" />
            </div>
         </div>
      </div>
   );
}

export default SolutionsPage;
