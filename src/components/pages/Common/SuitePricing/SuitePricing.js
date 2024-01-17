import React, { useState } from 'react';
import './products_SuitePricing.scss';
import ContactUsModal from 'components/pages/Forms/ContactUs';
import FeatureCard from './FeatureCard';
import FeatureCardRecc from './FeatureCardRecc';

function SuitePricing() {

   const [showContactUsModal, setShowContactUsModal] = useState(false);

   const closeContactUsModal = () => setShowContactUsModal(false);

   function getCurrentDimension() {
      return window.innerWidth >= 992;
   }

   return (
      <div className='component-container'>
         <div className="products_suite_container">
            <div className="content_container">
               <div className="title-wrapper">
                  <p className="heading--fancy text-center">Energize Valuation</p>
                  <p className="heading--two text-center">Suite Pricing</p>
               </div>
               {getCurrentDimension() ? <div className="card_section_1">
                  <FeatureCard setShowContactUsModal={setShowContactUsModal} />
                  <FeatureCardRecc setShowContactUsModal={setShowContactUsModal} />
                  <FeatureCard setShowContactUsModal={setShowContactUsModal} />
               </div>
                  : <div className="card_section_1">
                     <FeatureCardRecc setShowContactUsModal={setShowContactUsModal} />
                     <FeatureCard setShowContactUsModal={setShowContactUsModal} />
                     <FeatureCard setShowContactUsModal={setShowContactUsModal} />
                  </div>}
               <div className="contribute">
                  Barasingha contributes <span className="green">1%</span> of your purchase to remove CO₂ from atmosphere through NPAV Cloud
               </div>
            </div>
            {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal} />}
         </div>
      </div>

   );
}

export default SuitePricing;
