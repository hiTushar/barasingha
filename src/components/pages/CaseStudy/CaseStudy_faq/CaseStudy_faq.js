import React, { useState } from 'react';
import './CaseStudy_faq.scss';
import video from "../../../../media/ball.mp4";
import video2 from "../../../../media/faq-ball.mp4";
import { Link } from 'react-router-dom';
import ContactUsModal from 'components/pages/Forms/ContactUs';

function Faq() {
   // Define the tab data with titles and contents
   const tabData = [
      {
         title: 'What is the difference between Supreme and Premium Suite?',
         content: '1<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li> • Growing your tokens liquidity shouldn\'t be so hard.</li><li> • We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How can I purchase a Suite of products?',
         content: '2<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li> • Growing your tokens liquidity shouldn\'t be so hard.</li><li> • We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'For how many devices is Supreme Suite applicable?',
         content: '3<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li> • Growing your tokens liquidity shouldn\'t be so hard.</li><li> • We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How do you provide support?',
         content: '4<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li> • Growing your tokens liquidity shouldn\'t be so hard.</li><li> • We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
      {
         title: 'How can I make payment?',
         content: '5<div class="tab-content-inner-box"><div class="tab-content-text">Growing your tokens liquidity shouldn\'t be so hard. We’ve made it as simple three steps: create LP tokens, stake and earn. With options that like no lock to 180 day locks earning 50% more yield, Dapploy provides flexibility for developers and investors.</div><ul class="tab-content-list"><li> • Growing your tokens liquidity shouldn\'t be so hard.</li><li> • We’ve made it as simple three steps: create LP tokens, stake and earn.</li></ul><div class="tab-content-fade-text">Meet the needs of your business with Security solutions to evolve your organization</div></div>'
      },
   ];

   const [activeTab, setActiveTab] = useState(0);

   const[showContactUsModal, setShowContactUsModal] =useState(false);

   const closeContactUsModal = () => setShowContactUsModal(false);
 

   return (
      <div className="faq-section position-relative overflow-hidden">
         <div className="custom-container container">
            <div className="title-wrapper">
               <h6 className="text-center heading heading--fancy">Frequently Asked Questions</h6>
               <h2 className="text-center heading heading--two">Have Doubts?</h2>
            </div>
            <div className="faqRow">
               <div className="text-white">
                  <div className="d-flex align-items-start">
                     <div class="d-flex flex-column flex-fill tab-pills-box" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {tabData.map((tab, index) => (
                           <div
                              key={index}

                              onClick={() => setActiveTab(index)}
                              disabled={tab.disabled}
                           // dangerouslySetInnerHTML={{ __html: tab.title }}
                           >
                              <div className={`nav-card ${activeTab === index ? 'active' : ''}`}>
                                 <h6 className='d-flex justify-content-between mb-0'><span className='tab-title'>{tab.title}</span> <span className='tab-arrow'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.6699 10.4801L10.5531 3.43535C10.4908 3.38164 10.4113 3.35156 10.3275 3.35156H8.42617C8.26719 3.35156 8.19414 3.54922 8.31445 3.65234L15.8383 10.1836H3.26562C3.17109 10.1836 3.09375 10.2609 3.09375 10.3555V11.6445C3.09375 11.7391 3.17109 11.8164 3.26562 11.8164H15.8361L8.3123 18.3477C8.19199 18.4529 8.26504 18.6484 8.42402 18.6484H10.3898C10.4307 18.6484 10.4715 18.6334 10.5016 18.6055L18.6699 11.5199C18.7443 11.4552 18.8039 11.3754 18.8448 11.2857C18.8857 11.196 18.9068 11.0986 18.9068 11C18.9068 10.9014 18.8857 10.804 18.8448 10.7143C18.8039 10.6246 18.7443 10.5448 18.6699 10.4801Z" fill="#F8F8F8" />
                                 </svg></span> </h6></div>
                              <div
                                 key={index}
                                 className={`d-md-none d-block tab-pane ${activeTab === index ? 'd-block active' : 'd-none'}`}
                                 dangerouslySetInnerHTML={{ __html: tab.content }}
                              >
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className='text-white d-md-flex d-none'>
                  <div className="tab-content" id="v-pills-tabContent">
                     {tabData.map((tab, index) => (
                        <div
                           key={index}
                           className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                           dangerouslySetInnerHTML={{ __html: tab.content }}
                        >
                           {/* {tab.content} */}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <p className='text-center faq-foot-text para'>Didn't find the answer you are looking for? <div className="contact" onClick={() => setShowContactUsModal(true)}>Contact our support</div></p>

            <div className="faq-saphere-box faq-saphere1">
               <div className="video-box">
                  <video src={video} autoPlay loop muted playsInline></video>
               </div>
            </div>
            <div className="faq-saphere-box faq-saphere2">
               <div className="video-box">
                  <video src={video2} autoPlay loop muted playsInline></video>
               </div>
            </div>
         </div>
         {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal}/>}
      </div>
   );
}

export default Faq;