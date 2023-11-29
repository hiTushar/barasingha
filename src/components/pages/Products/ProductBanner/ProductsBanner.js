import React from 'react';
import './ProductsBanner.scss';
import download from '../../../../media/download.svg';
import imgProductHero from '../../../../media/imgProductHero.svg';

function SolutionsPage() {
   return (
      <div className="solutions_banner_container">
         <div className="container">
            <div className="left_container">
               <div className="title-wrapper">
                  <h6 className="heading heading--fancy">net protection</h6>
                  <h1 className="heading heading--one text-gradient">Password Vault Manager</h1>
                  <p className="para para--lg para--light my-4">
                     Protect patient data, accelerate performance, and offer employees and third parties secure access to internal systems with Cloudflare
                  </p>
               </div>
               <div className="btn_container">
                  <button className="btn_contact_sales"><img src={download} alt="download" />Download a Sample Report</button>
               </div>
            </div>
            <div className="right_container">
               <img src={imgProductHero} alt="HerosectionSolution" />
            </div>
         </div>
      </div>
   );
}

export default SolutionsPage;
