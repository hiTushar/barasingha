import React from 'react';
import './ProductsBanner.scss';
import download from '../../../../media/download.svg';
import imgProductHero from '../../../../media/imgProductHero.svg';

function ProductsBanner() {
   return (
      <div className="product_banner_container">
         <div className="left_container">
            <div className="title-wrapper">
               <p className="heading--fancy">net protection</p>
               <p className="heading--one text-gradient">Password Vault Manager</p>
               <p className="para--light">
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
   );
}

export default ProductsBanner;
