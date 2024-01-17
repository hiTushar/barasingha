import React from 'react';
import './SolutionSuite.scss';
import website from '../../../../media/Website.svg';
import network from '../../../../media/network.svg';
import keydigital from '../../../../media/keydigital.svg';
import cloudprotection from '../../../../media/cloudprotection.svg';
import maintenance from '../../../../media/maintenance.svg';

function SolutionSuite() {
   return (
      <section className="solution_suite">
         <div className="solution_suite_container">
            <div className="title-wrapper">
               <p className="heading--fancy text-center">WHY BARASINGHA</p>
               <p className="heading--two text-center">Solution Suite</p>
            </div>
            <div className="card_section_1">
               <div className="feature_card">
                  <div className="card_content">
                     <div className="image"><img src={website} alt={"website"} /></div>
                     <h3 className="heading heading--three">Corporate Web Control</h3>
                     <p className="para para--light desc">Our Data Engine provides the infrastructure and expertise needed to continually improve model performance with human feedback.</p>
                  </div>
               </div>
               <div className="feature_card">
                  <div className="card_content">
                     <div className="image"><img src={network} alt={"network"} /></div>
                     <h3 className="heading heading--three">Endpoint Security</h3>
                     <p className="para para--light desc">Have confidence in the model's answers. Donovan provides citations.</p>
                  </div>
               </div>
               <div className="feature_card">
                  <div className="card_content">
                     <div className="image"><img src={keydigital} alt={"keydigital"} /></div>
                     <h3 className="heading heading--three">Secure RDP Manager</h3>
                     <p className="para para--light desc">Our Data Engine provides the infrastructure and expertise needed to continually improve model performance with human feedback.</p>
                  </div>
               </div>
               <div className="feature_card">
                  <div className="card_content">
                     <div className="image"><img src={cloudprotection} alt={"cloudprotection"} /></div>
                     <h3 className="heading heading--three">Smart Network Manager</h3>
                     <p className="para para--light desc">Have confidence in the model's answers. Donovan provides.</p>
                  </div>
               </div>
               <div className="feature_card">
                  <div className="card_content">
                     <div className="image"><img src={maintenance} alt={"maintenance"} /></div>
                     <h3 className="heading heading--three">Firewall</h3>
                     <p className="para para--light desc">Our Data Engine provides the infrastructure and expertise needed.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
}

export default SolutionSuite;