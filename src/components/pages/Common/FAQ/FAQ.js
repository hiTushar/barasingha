import React, { useState } from 'react';
import './FAQ.scss';
import video from "../../../../media/ball.webm";
import video2 from "../../../../media/faq-ball.webm";
import tabArrow from './tabArrow.svg';

function Faq({ setShowContactUsModal = () => { } }) {
   // Define the tab data with titles and contents

   const tabData = [
      {
         title: 'What is the difference between Supreme and Premium Suite?',
         content: '<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li>Growing your tokens liquidity shouldn\'t be so hard.</li><li>We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How can I purchase a Suite of products?',
         content: '<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li>Growing your tokens liquidity shouldn\'t be so hard.</li><li>We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'For how many devices is Supreme Suite applicable?',
         content: '<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li>Growing your tokens liquidity shouldn\'t be so hard.</li><li>We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How do you provide support?',
         content: '<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li>Growing your tokens liquidity shouldn\'t be so hard.</li><li>We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How can I make payment?',
         content: '<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li>Growing your tokens liquidity shouldn\'t be so hard.</li><li>We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
   ];

   const [activeTab, setActiveTab] = useState(0);

   function getCurrentDimension() {
      if (window.innerWidth < 992) {
         return true;
      }
      return false;
   }

   const changeActiveTab = (index) => {
      if(index === activeTab && getCurrentDimension()) {
         setActiveTab(null);
      }
      else {
         setActiveTab(index);
      }
   }
   
   return (
      <div className="faq-section position-relative overflow-hidden">
         <div className="component-container">
            <div className="title-wrapper">
               <h6 className="text-center heading heading--fancy">Frequently Asked Questions</h6>
               <h2 className="text-center heading">Have Doubts?</h2>
            </div>
            <div className="faqRow">
               <div class="allFaq" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tabData.map((tab, index) => (
                        <div
                           key={index}
                           onClick={() => changeActiveTab(index)}
                           disabled={tab.disabled}
                           className='faq-box'
                        // dangerouslySetInnerHTML={{ __html: tab.title }}
                        >
                           <div className={`nav-card ${activeTab === index ? 'active' : ''}`}>
                              <span className='tab-title'>{tab.title}</span>
                              <span className='tab-arrow'>
                                 <img src={tabArrow} alt='tab arrow' />
                              </span>
                           </div>
                           <div
                              key={index}
                              className={`tab-pane ${activeTab === index ? 'view-tab' : 'hide-tab'}`}
                              dangerouslySetInnerHTML={{ __html: tab.content }}
                           >
                           </div>
                        </div>
                     ))}
               </div>
               <div className="faq-saphere-box faq-saphere1">
                  <div className="video-box">
                     <video disableRemotePlayback src={video} autoPlay loop muted playsInline></video>
                  </div>
               </div>
               <div className="faq-saphere-box faq-saphere2">
                  <div className="video-box">
                     <video disableRemotePlayback src={video2} autoPlay loop muted playsInline></video>
                  </div>
               </div>
            </div>
            <div className='text-center faq-foot-text para'>
               <p>Didn't find the answer you are looking for?</p> 
               <p className="contact" onClick={() => setShowContactUsModal(true)}>Contact our support</p>
            </div>

           
         </div>
      </div>
   );
}

export default Faq;